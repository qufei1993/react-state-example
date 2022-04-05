import { combineReducers } from 'redux-immutable';
import { reducer as todosReducer } from '../pages/todos/store';

const reducer = combineReducers({
  todosPage: todosReducer,
});

export default reducer;
