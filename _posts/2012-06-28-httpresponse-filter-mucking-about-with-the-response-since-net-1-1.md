---
title: "HttpResponse.Filter: Mucking about with the response since .NET 1.1™"
tags: programming csharp dotnet
published_at: https://blog.thzinc.com/post/77743473662/httpresponsefilter-mucking-about-with-the
---

Davis and I set about a journey together into the nether regions of the ASP.NET request lifecycle to solve an issue: Insert a script into the header of an ASP.NET page, whether that page has a `<head runat=”server”/>` element or not. After trying several different approaches, we dug a little deeper and found [`HttpResponse.Filter`][httpresponse-filter].

`HttpResponse.Filter` allows an implementer to read and re-write the response stream before it is given to the requester. The concept of a “response filter” in ASP.NET is implemented as a [`System.IO.Stream`][stream] with overridden [`Write()`][stream-write], [`Flush()`][stream-flush], and [`Dispose()`][stream-dispose] methods. When the filter is applied, the whole content of the response stream is written to the response filter via its `Write()` method. Once the response stream has been written to the filter, the filter’s `Flush()` method is called, and finally its [`Close()`][stream-close] method is called, which internally calls its `Dispose()` method. The filter should be implemented to write to another stream, which by convention, should take in the current response’s filter value. (This is because filters can be chained together by many things in the ASP.NET request lifecycle.)

Our implementation of a response filter needed to locate a `<head/>` element somewhere in the response stream, then “inject” an additional `<script/> `element after the opening `<head>` tag. The implementation is pretty simplistic:

```csharp
/// <summary>
/// A stream that injects a javascript file with a given URI into a head tag when it writes.
/// Used as a response filter to inject LanguageManager's javascript resources.
/// </summary>
internal class ScriptInjectionResponseFilter : Stream
{
    #region Constructors & Init

    /// <summary>
    /// Creates a ScriptInjectionResponseFilter from a stream (typically a response stream) for a script file with the given URI.
    /// </summary>
    /// <param name="stream">The stream to inject a script tag into.</param>
    /// <param name="uri">The URI of the script file to be injected, used as the injected script tag's src.</param>
    public ScriptInjectionResponseFilter(Stream stream, string uri)
    {
        _stream = stream;
        _uri = uri;
    }

    #endregion

    #region Public Properties

    /// <summary>
    /// Gets a value indicating whether the current stream supports reading.
    /// </summary>
    public override bool CanRead
    {
        get { return false; }
    }

    /// <summary>
    /// Gets a value indicating whether the current stream supports seeking.
    /// </summary>
    public override bool CanSeek
    {
        get { return false; }
    }

    /// <summary>
    /// Gets a value indicating whether the current stream supports writing.
    /// </summary>
    public override bool CanWrite
    {
        get { return true; }
    }

    /// <summary>
    /// Gets the length in bytes of the current stream (Not Implemented).
    /// </summary>
    public override long Length
    {
        get { throw new NotImplementedException(); }
    }

    /// <summary>
    /// Gets or sets the position within the current stream (Not Implemented).
    /// </summary>
    public override long Position
    {
        get
        {
            throw new NotImplementedException();
        }
        set
        {
            throw new NotImplementedException();
        }
    }

    #endregion

    #region Private & Protected Properties

    protected Stream _stream;
    protected string _uri;

    //This is static so that we only incur its (expensive) instantiation cost once
    protected static Regex _headTagPattern = new Regex(@"<head(\s[^>]*|\s*)>", RegexOptions.IgnoreCase | RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.CultureInvariant);

    #endregion

    #region Public Methods

    /// <summary>
    /// Injects a script tag into a head tag in a sequence of bytes and writes the resulting bytes to the current stream
    /// and advances the position within the stream by the number of bytes written.
    /// </summary>
    /// <param name="buffer">An array of bytes. This method copies <paramref name="count"/> from <paramref name="buffer"/> plus the number of injected bytes to the current stream.</param>
    /// <param name="offset">The zero-based byte offset in <paramref name="buffer"/> at which to begin copying bytes to the current stream.</param>
    /// <param name="count">The number of bytes (not counting the injections) to be written to the current stream.</param>
    public override void Write(byte[] buffer, int offset, int count)
    {
        Buffer.BlockCopy(buffer, offset, buffer, 0, count);
        string buf = UTF8Encoding.UTF8.GetString(buffer);

        buf = _headTagPattern.Replace(buf, "$0" + string.Format(Resources.ScriptInjection, _uri));

        _stream.Write(UTF8Encoding.UTF8.GetBytes(buf), 0, UTF8Encoding.UTF8.GetByteCount(buf));
    }

    /// <summary>
    /// Clears all buffers for the current stream and causes any buffered data to be written to the underlying device.
    /// </summary>
    public override void Flush()
    {
        _stream.Flush();
    }

    /// <summary>
    /// Reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read. (Not Implemented)
    /// </summary>
    /// <param name="buffer">An array of bytes. When this method returns, the buffer contains the specified byte array with the values between <paramref name="offset"/> and (<paramref name="offset"/> + <paramref name="count"/> - 1) replaced by the bytes read from the current source.</param>
    /// <param name="offset">The zero-based byte offset at which to begin storing the data read from the current stream.</param>
    /// <param name="count">The maximum number of bytes to be read from the current stream.</param>
    /// <returns>Not Implemented</returns>
    public override int Read(byte[] buffer, int offset, int count)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Sets the position within the current stream (Not Implemented).
    /// </summary>
    /// <param name="offset">A byte offset relative to the <paramref name="origin"/> parameter.</param>
    /// <param name="origin">A value of System.IO.SeekOrigin indicating the reference point used to obtain the new position.</param>
    /// <returns>Not Implemented</returns>
    public override long Seek(long offset, SeekOrigin origin)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Sets the length of the current stream (Not Implemented).
    /// </summary>
    /// <param name="value">The desired length of the current stream in bytes.</param>
    public override void SetLength(long value)
    {
        throw new NotImplementedException();
    }

    #endregion

    #region Private & Protected Methods

    /// <summary>
    /// Releases the unmanaged resources used by the System.IO.Stream and optionally releases the managed resources.
    /// </summary>
    /// <param name="disposing">true to release both managed and unmanaged resources; false to release only unmanaged resources.</param>
    protected override void Dispose(bool disposing)
    {
        if (disposing)
        {
            _stream.Flush();
            _stream.Close();
        }

        base.Dispose(disposing);
    }

    #endregion
}
```

And we happen to be hooking it into our `Page` in the `OnInitComplete` event using a variant of the common response filter instantiation pattern:

```csharp
Response.Filter = new ScriptInjectionResponseFilter(Response.Filter, "/path/to/included/javascript.js");
```

So, as Davis and I mucked about in the bowels of ASP.NET, we built a spiffy response filter to do our bidding. But future ASP.NET muckers beware, while the trail has been blazed, there are several pitfalls to avoid. Make preparations before venturing in behind us.

[httpresponse-filter]: https://learn.microsoft.com/en-us/dotnet/api/system.web.httpresponse.filter?view=netframework-4.8.1&redirectedfrom=MSDN#System_Web_HttpResponse_Filter
[stream]: https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-8.0&redirectedfrom=MSDN
[stream-write]: https://learn.microsoft.com/en-us/dotnet/api/system.io.stream.write?view=net-8.0&redirectedfrom=MSDN#System_IO_Stream_Write_System_Byte___System_Int32_System_Int32_
[stream-flush]: https://learn.microsoft.com/en-us/dotnet/api/system.io.stream.flush?view=net-8.0&redirectedfrom=MSDN#System_IO_Stream_Flush
[stream-dispose]: https://learn.microsoft.com/en-us/dotnet/api/system.io.stream.dispose?view=net-8.0&redirectedfrom=MSDN#System_IO_Stream_Dispose
[stream-close]: https://learn.microsoft.com/en-us/dotnet/api/system.io.stream.close?view=net-8.0&redirectedfrom=MSDN#System_IO_Stream_Close
