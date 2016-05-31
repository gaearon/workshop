import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch({
            type: 'ADD_TODO',
            id: (nextTodoId++).toString(),
            text: input.value,
          });
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
