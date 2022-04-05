import { useEffect } from "react";
import { connect } from 'react-redux';

import { actionCreators } from './store';
import Todo from './components/Todo';
import TodoAdd from './components/TodoAdd';

/**
 * Todos component
 * @param {Number} todos[].id 
 * @param {String} todos[].content 
 * @param {Function} getTodos
 * @returns 
 */
const Todos = ({ todos, getTodos }) => {
  console.log('Todos render');

  useEffect(() => {
    getTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="todos">
    <h2 className="todos-title"> Todos App </h2>
    <p className="todos-desc"> React + Redux 实现 todos </p>
    <TodoAdd />
    <div className="todo-list">
      {
        todos.map(todo => <Todo key={todo.get('id')} todo={todo} />)
      }
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  todos: state.getIn(['todosPage', 'todos']),
});

const mapDispatchToProps = (dispatch) => ({
  getTodos() {
    dispatch(actionCreators.getTodos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);