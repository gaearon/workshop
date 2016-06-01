# 07. Creating Logger and Promise Middleware

Before: Wouldn't it be nice if you could modify the behavior of `store.dispatch` to, say, support promises? Or automatically log whenever an action is dispatched?

- Create a logger middleware that logs each action that is dispatched.
- Create a module called `configureStore` that creates a store with middleware, using `applyMiddleware`. Import this into the app index.
- Remove `console.log` from the `fetchData` method of `<VisibleTodoList>`, since it's no longer needed.
- Create a promise middleware that intercepts dispatched promises and instead dispatches the resolved value of the promise.
- Create a `fetchTodos` action creator that calls the API and returns a promise for an action. Use the existing `receive` action creator inside `fetchTodos`.
- Call the bound `fetchTodos` action creator inside the `fetchData` method of `<VisibleTodoList>` instead of calling the API directly.

After: Use middleware to intercept actions and perform side-effects before they are sent to the store.
