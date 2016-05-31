import test from 'ava';
import todos, { getVisibleTodos } from '../';

test('getVisibleTodos selects todos using given filter', t => {
  const state = [
    {},
    { type: 'ADD_TODO', id: '1' },
    { type: 'ADD_TODO', id: '2' },
    { type: 'ADD_TODO', id: '3' },
    { type: 'TOGGLE_TODO', id: '2' },
  ].reduce(todos, undefined);

  t.deepEqual(
    getVisibleTodos(state, 'all').map(o => o.id),
    ['1', '2', '3']
  );

  t.deepEqual(
    getVisibleTodos(state, 'active').map(o => o.id),
    ['1', '3']
  );

  t.deepEqual(
    getVisibleTodos(state, 'completed').map(o => o.id),
    ['2']
  );
});
