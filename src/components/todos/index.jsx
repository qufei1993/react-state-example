import { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";
import { TODO_LIST_ADD, TODO_LIST_EDIT, TODO_LIST_REMOVE } from "../../reducers/todos-reducer";

const TodoAdd = () => {
  console.log('TodoAdd render');
  const [content, setContent] = useState('');
  const { dispatch } = useTodo();

  return <div className="todo-add">
    <input className="input" type="text" onChange={e => setContent(e.target.value)} />
    <button className="btn btn-lg" onClick={() => {
      dispatch({ type: TODO_LIST_ADD, payload: { content } })
    }}>
      添加
    </button>
  </div>
};

const Todo = ({ todo }) => {
  console.log('Todo render');
  const { dispatch } = useTodo();
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(todo.content);

  return <div className="todo-list-item">
    {
      !isEdit ? <>
        <div className="todo-list-item-content">{todo.content}</div>
        <button className="btn" onClick={() => setIsEdit(true)}> 编辑 </button>
        <button className="btn" onClick={() => dispatch({ type: TODO_LIST_REMOVE, payload: { id: todo.id } })}> 删除 </button>
      </> : <>
        <div className="todo-list-item-content">
          <input className="input" value={content} type="text" onChange={ e => setContent(e.target.value) } />
        </div>
        <button className="btn" onClick={() => {
          setIsEdit(false);
          dispatch({ type: TODO_LIST_EDIT, payload: { id: todo.id, content } })
        }}> 更新 </button>
        <button className="btn" onClick={() => setIsEdit(false)}> 取消 </button>
      </>
    }
  </div>
}

const Todos = () => {
  console.log('Todos render');
  const { state } = useTodo();
  
  return <div className="todos">
    <h2 className="todos-title"> Todos App </h2>
    <p className="todos-desc"> useReducer + useContent 实现 todos </p>
    <TodoAdd />
    <div className="todo-list">
      {
        state.todos.map(todo => <Todo key={todo.id} todo={todo} />)
      }
    </div>
  </div>
}

export default Todos;
