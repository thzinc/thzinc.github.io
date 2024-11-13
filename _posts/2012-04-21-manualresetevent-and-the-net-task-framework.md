---
title: ManualResetEvent and the .NET Task framework
tags: programming csharp dotnet
published_at: https://blog.thzinc.com/post/77110790089/manualresetevent-and-the-net-task-framework
---

I’ve recently dived in to the .NET 4 Task framework, and was trying to deal with the issue of having a thread sleep for a specified period of time–unless a cancellation has been requested. This led me to discover `ManualResetEvent`, which is awesome for what I needed. Without further ado, here’s some code!

```csharp
CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();

Task doStuff = Task.Factory.StartNew(() =>
{
    // Create a new reset event and set it to "unsignaled"
    ManualResetEvent manualResetEvent = new ManualResetEvent(false);

    // Hook into the cancellation token's event with Register(). This will be called
    // when the cancellation token is signaled for cancellation
    cancellationTokenSource.Token.Register(() => manualResetEvent.Set());

    // Computationally-heavy logic here
    while (!cancellationTokenSource.IsCancellationRequested)
    {
        /* *grunt* *moan* *grimace* <- hard work */

        // Wait 30 seconds between runs, or until the reset event is signaled
        manualResetEvent.WaitOne(30000);

        // This is better than Thread.Sleep(30000) because the reset event will
        // unblock as soon as it is signaled, where Thread.Sleep() will remain
        // blocked until the specified time has elapsed
    }
}, cancellationTokenSource.Token);

// Wait 5 seconds and signal a cancellation
Thread.Sleep(5000);
cancellationTokenSource.Cancel();

// Enjoy the fact that the task cancelled when it was requested!
```
