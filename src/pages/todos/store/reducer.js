import { fromJS } from 'immutable';
import { TODO_LIST, TODO_LIST_ADD, TODO_LIST_REMOVE, TODO_LIST_EDIT } from './constants';

export const initialState = fromJS({
  todos: [],
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TODO_LIST: {
      return state.merge({
        todos: state.get('todos').concat(fromJS(action.payload.todos)),
      });
    }
    case TODO_LIST_ADD: {
      return state.set('todos', state.get('todos').push(fromJS({
        id: action.payload.id,
        content: action.payload.content,
      })));
    }
    case TODO_LIST_EDIT: {
      return state.merge({
        todos: state.get('todos').map(item => {
          if (item.get('id') === action.payload.id) {
            const newItem = { ...item.toJS(), content: action.payload.content };
            return fromJS(newItem);
          }
          return item;
        })
      })
    }
    case TODO_LIST_REMOVE: {
      return state.merge({
        todos: state.get('todos').filter(item => item.get('id') !== action.payload.id),
      })
    }
    default: return state;
  }
};

export default reducer;
