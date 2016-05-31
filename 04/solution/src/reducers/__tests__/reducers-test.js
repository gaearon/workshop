import test from 'ava';
import { getVisibleTodos } from '../';

test('getVisibleTodos selects todos using given filter', t => {
  const todos = [
    { id: 1, completed: true },
    { id: 2, completed: false },
    { id: 3, completed: true },
  ];

  t.deepEqual(
    getVisibleTodos(todos, 'all').map(o => o.id),
    [1, 2, 3]
  );

  t.deepEqual(
    getVisibleTodos(todos, 'completed').map(o => o.id),
    [1, 3]
  );

  t.deepEqual(
    getVisibleTodos(todos, 'active').map(o => o.id),
    [2]
  );
});
