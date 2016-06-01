# 08 - Updating the State with Fetched Data

Before: we log the actions and the next state using the middleware, but we don’t handle the `RECEIVE_TODOS` action, so when we fetch the todos, nothing happens.

- Remove the single `todo` reducer, as we are moving source of truth to the server.
- Change the `byId` reducer to handle `RECEIVE_TODOS` by merging them all into its state.
- Remove the `ADD_TODO` case from the `allIds` reducer, and make it handle the `RECEIVE_TODOS` action when the `filter` corresponds to `'all'`.
- Copy and paste the `allIds` reducer into `activeIds` and `completedIds` reducer that are identical, except that they only handle the `RECEIVE_TODOS` action when the `filter` corresponds to `'active'` and `'completed'`, respectively.
- Combine `allIds`, `completedIds`, and `activeIds` into a single `idsByFilter` reducer, and use `all`, `completed`, and `active` as the keys.
- Rewrite the `getVisibleTodos` selector to stop filtering on the client, and instead map the IDs for the given filter to the `state.byId` lookup table.

After: the fetched todos appear in the tabs. We can switch between the tabs, and they get loaded after a brief delay. If we open a previosly opened tab, the data is cached even though the actions still fire.
