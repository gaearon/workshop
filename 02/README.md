# 02 - Navigating with React Router

Before: Clicking on the filter links updates the visible todos, but the URL is not updated.

- Extract `<Root>` component.
- Add `<Router>` to the `<Root>` component.
- Create a single `<Route>` for `/(:filter)` path.
- Change `<FilterLink>` to use React Router `<Link>`.
- Replace constants like `'SHOW_ALL'` in `<Footer>` with paths like `'all'`.

After: Clicking on the filter links changes the URL, but the visible todos don’t update yet.
