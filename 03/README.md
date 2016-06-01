# 03. Combining Redux and React Router State

Before: Clicking a filter link does not update the current route, and vice versa.

- Use React Router's `<Link>` component instead of our custom `<Link>`.
- Use `params` props inside `mapPropsToState` to get current filter.
- Remove the `visibilityFilter` reducer and corresponding actions.
- Update `getVisibleTodos` constants to match router params.

After: Clicking a filter link *does* update the current route, and vice versa.
