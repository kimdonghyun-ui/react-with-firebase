import { combineReducers } from 'redux';
import chats from './chats';
// import todos from './todos';

const rootReducer = combineReducers({
  chats,
//   todos,
});

export default rootReducer;