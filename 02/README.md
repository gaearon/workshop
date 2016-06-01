# 02 - Navigating with React Router

Clicking on the filter links changes the URL, but the visible todos don’t update yet.

- Extract `<Root>` component.
- Add `<Router>` to the `<Root>` component.
- Create a single `<Route>` for `/(:filter)` path.
- Change `<FilterLink>` to use React Router `<Link>`.
- Replace constants like `'SHOW_ALL'` in `<Footer>` with paths like `'all'`.
