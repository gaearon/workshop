# 04 - Colocating Selectors with Reducers

Before: `getVisibleTodos` is defined inside the `VisibleTodoList` component. We also have a root reducer file that exports `combineReducers({ todos })`.

We want to remove the unnecessary indirection, and we want to colocate selector with the reducer so that if the state shape changes, we only need to modify a single file.

* Remove `reducers/index.js` because it only combines a single reducer.
* Rename `reducers/todos.js` to `reducers/index.js`.
* Move `getVisibleTodos` to the `reducers/index.js` and make it a named export.
* Make sure you’re calling it with `state` and not `state.todos` in the `VisibleTodoList`.

After: `todos` is the top-level reducer, and `getVisibleTodoList` selector is colocated with it in the same file.
