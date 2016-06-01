# 03. Combining Redux and React Router State

Before: The filter links update the route, but do not update the UI.

- Use React Router's `withRouter` to access the current route params.
- Remove the `visibilityFilter` reducer and corresponding actions. We will no longer track this using Redux.
- Use `params` props inside `mapPropsToState` to get current filter.

After: The UI respects the filter specified in the route.
