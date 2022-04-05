
import { TODO_LIST, TODO_LIST_ADD, TODO_LIST_REMOVE, TODO_LIST_EDIT } from './constants';

const randomID = () => Math.floor(Math.random() * 10000);

export const getTodos = () => async dispatch => {
  // 模拟 API Call
  const todos = await Promise.resolve([
    {
      id: randomID(),
      content: '学习 React',
    },
    {
      id: randomID(),
      content: '学习 Node.js',
    }
  ]);

  const action = {
    type: TODO_LIST,
    payload: {
      todos
    }
  };
  dispatch(action);
}

export const addTodo = (content) => async dispatch => {
  const result = await Promise.resolve({
    id: randomID(),
    content,
  });

  const action = {
    type: TODO_LIST_ADD,
    payload: result
  };
  dispatch(action);
}

export const editTodo = (id, content) => async dispatch => {
  const result = await Promise.resolve({ id, content });
  const action = {
    type: TODO_LIST_EDIT,
    payload: result,
  };
  dispatch(action);
}

export const removeTodo = id => async dispatch => {
  const result = await Promise.resolve({ id });
  const action = {
    type: TODO_LIST_REMOVE,
    payload: result,
  };
  dispatch(action);
}
