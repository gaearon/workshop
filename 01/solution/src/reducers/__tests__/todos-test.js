import test from 'ava';
import isSubset from 'is-subset';
import todosReducer from '../todos';
import { addTodo, toggleTodo } from '../../actions';

test('ADD_TODO adds a todo', t => {
  let state = todosReducer(undefined, {});
  state = todosReducer(state, addTodo('Write some action creators'));
  state = todosReducer(state, addTodo('Write some reducers'));

  t.is(state.length, 2);
  t.true(isSubset(state[0], {
    text: 'Write some action creators',
    completed: false,
  }));
  t.true(isSubset(state[1], {
    text: 'Write some reducers',
    completed: false,
  }));
});

test('TOGGLE_TODO toggles whether a todo is completed', t => {
  let state = [
    { id: 0, text: 'Write some action creators', completed: false },
    { id: 1, text: 'Write some reducers', completed: false },
  ];
  state = todosReducer(state, toggleTodo(1));

  t.true(state[1].completed);
});
