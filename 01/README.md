# 01 - Action Creators

Before: Using `mapDispatchToProps` to wrap the dispatch method for every action is tedious.

- Write action creators for each action type.
- In `VisibleTodoList`, use action creators instead of custom `mapDispatchToProps` as the second argument to `connect`.
- Use concise functions where possible (in action creators and `mapStateToProps`).

After: React Redux binds our action creators for us.
