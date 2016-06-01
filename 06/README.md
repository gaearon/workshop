# 06 - Fetching Data on Route Change

Before: `VisibleTodoList` is the component generated directly by `connect()`.

The project now contains a fake backend implementation in the `api` folder that returns Promises.

* Add `receiveTodos(filter, response)` to the action creators.
* Import `fetchTodos` from `../api` inside `VisibleTodoList`.
* Import everything frmo `../actions' inside `VisibleTodoList` as a namespace import, and pass them as the second argument to `connect()` to make action creators available as props on the component.
* Make `VisibleTodoList` a separate React class that calls `this.fetchData()` in the `componentDidMount` and `componentDidUpdate` lifecycle hooks.
* Make the new `VisibleTodoList` render the `TodoList`. Pay attention to the props it receives.
* Modify `mapStateToProps` to include the `filter` prop.
* In `componentDidUpdate`, only fetch data if the `filter` prop changes.
* In `fetchData`, call the `fetchTodos` API, and when the Promise resolves, call `this.props.receiveTodos` and log the fetched todos together with the filter.
* Finally, redefine `VisibleTodoList` before exporting it so that it is the result of calling `connect()` on itself.

After: we don’t handle the fetched todos yet, but we dispatch actions and log the received todos and the corresponding filter whenever the route changes.
