import { useState } from "react";
import { connect } from 'react-redux';

import { actionCreators } from '../store';

/**
 * Add todo component
 * @param {Function} props.addTodo 
 * @returns 
 */
const TodoAdd = ({ addTodo }) => {
  console.log('TodoAdd render');
  const [content, setContent] = useState('');

  return <div className="todo-add">
    <input className="input" type="text" onChange={e => setContent(e.target.value)} />
    <button className="btn btn-lg" onClick={() => addTodo(content)}>
      添加
    </button>
  </div>
};

const mapDispatchToProps = (dispatch) => ({
  addTodo(content) {
    dispatch(actionCreators.addTodo(content));
  },
});

export default connect(null, mapDispatchToProps)(TodoAdd);