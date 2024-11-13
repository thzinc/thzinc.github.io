---
title: Follow-up to Interesting ASP.NET bug…
tags: programming dotnet csharp
published_at: https://blog.thzinc.com/post/6569813977/follow-up-to-interesting-aspnet-bug
---

Previous post: [Interesting ASP.NET bug…][prev-post]

I just grabbed the .NET Reflector demo and took a look at the Form member of HttpRequest and found this:

```csharp
public NameValueCollection Form
{
    get
    {
        if (this._form == null)
        {
            this._form = new HttpValueCollection();
            if (this._wr != null)
            {
                this.FillInFormCollection();
            }
            this._form.MakeReadOnly();
        }
        if (this._flags[2])
        {
            this._flags.Clear(2);
            this.ValidateNameValueCollection(this._form, RequestValidationSource.Form);
        }
        return this._form;
    }
}
```

Note the `this._form.MakeReadOnly();` line. Apparently, once the Form member is accessed, it is supposed to become read-only. And something, be it ASP.NET or the code I’m working on, doesn’t like this.

[prev-post]: {% post_url 2011-06-15-interesting-asp-net-bug %}
