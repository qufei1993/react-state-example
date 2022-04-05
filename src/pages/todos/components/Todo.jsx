import { useState } from "react";
import { connect } from 'react-redux';

import { actionCreators } from '../store';

/**
 * Todo component
 * @param {Number} props.todo.id
 * @param {String} props.todo.content
 * @param {Function} props.editTodo
 * @param {Function} props.removeTodo
 * @returns 
 */
const Todo = ({ todo, editTodo, removeTodo }) => {
  console.log('Todo render');
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(todo.get('content'));

  return <div className="todo-list-item">
    {
      !isEdit ? <>
        <div className="todo-list-item-content">{todo.get('content')}</div>
        <button className="btn" onClick={() => setIsEdit(true)}> 编辑 </button>
        <button className="btn" onClick={() => removeTodo(todo.get('id'))}> 删除 </button>
      </> : <>
        <div className="todo-list-item-content">
          <input className="input" value={content} type="text" onChange={ e => setContent(e.target.value) } />
        </div>
        <button className="btn" onClick={() => {
          setIsEdit(false);
          editTodo(todo.get('id'), content);
        }}> 更新 </button>
        <button className="btn" onClick={() => setIsEdit(false)}> 取消 </button>
      </>
    }
  </div>
}

const mapDispatchToProps = (dispatch) => ({
  editTodo(id, content) {
    dispatch(actionCreators.editTodo(id, content));
  },
  removeTodo(id) {
    dispatch(actionCreators.removeTodo(id));
  }
});

export default connect(null, mapDispatchToProps)(Todo);