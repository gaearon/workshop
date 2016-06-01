# 05. Normalizing the State Shape

Before: Todos are stored in a big array.

- Extract a `todo` reducer into its own module (you can just copy and paste this file from the solution, since we did the same thing yesterday).
- Replace the `todos` reducer with two separate top-level reducers: `byId` and `allIds`. `byId` stores the todos as a normalized object, keyed by id:

```js
{
  '1': { id: '1', text: 'Complete workshop day 1', completed: true },
  '2': { id: '2', text: 'Complete workshop day 2', completed: false },
  '3': { id: '3', text: 'Attend conf', completed: false },
}
```

  `allIds` stores a list of all the todo ids.

```js
['1', '2', '3']
```

- Create a `getAllTodos` selector.
- Update `getVisibleTodos` to use `getAllTodos`.

After: We've changed the structure of our state object, but our UI code has not changed because we're using selectors.
