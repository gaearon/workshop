import test from 'ava';
import { mapStateToProps, mapDispatchToProps } from '../VisibleTodoList';
import sinon from 'sinon';

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

test('mapDispatchToProps returns `onTodoClick` function', t => {
  const dispatch = sinon.spy();
  const { onTodoClick } = mapDispatchToProps(dispatch);
  onTodoClick('123');
  t.deepEqual(dispatch.args[0][0], { type: 'TOGGLE_TODO', id: '123' });
});
