import test from 'ava';
import isSubset from 'is-subset';
import { addTodo, toggleTodo } from '../';

test('addTodo creates actions with text', t => {
  t.true(isSubset(addTodo('Write action creators'), {
    type: 'ADD_TODO',
    text: 'Write action creators',
  }));
  t.true(isSubset(addTodo('Write reducers'), {
    type: 'ADD_TODO',
    text: 'Write reducers',
  }));
  t.true(isSubset(addTodo('Write tests'), {
    type: 'ADD_TODO',
    text: 'Write tests',
  }));
});

test('addTodo creates actions with UUIDs', t => {
  const a = addTodo('a');
  const b = addTodo('b');
  t.is(typeof a.id, 'string');
  t.is(typeof b.id, 'string');
  t.not(a.id, b.id);
});

test('toggleTodo creates action with id property', t => {
  t.deepEqual(toggleTodo('123'), {
    type: 'TOGGLE_TODO',
    id: '123',
  });
});
