import test from 'ava';
import { mapStateToProps } from '../VisibleTodoList';

test('mapStateToProps filters todos using `ownProps.params.filter`', t => {
  const state = {
    todos: [
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: true },
    ],
  };
  t.deepEqual(
    mapStateToProps(state, { params: { filter: 'all' } })
      .todos.map(o => o.id),
    [1, 2, 3]
  );

  t.deepEqual(
    mapStateToProps(state, { params: { filter: 'completed' } })
      .todos.map(o => o.id),
    [1, 3]
  );

  t.deepEqual(
    mapStateToProps(state, { params: { filter: 'active' } })
      .todos.map(o => o.id),
    [2]
  );
});
