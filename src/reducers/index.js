import { combineReducers } from 'redux';
// ... down
import peopleReducer from './people';


const rootReducer = combineReducers({
  // ... down
  myStates : peopleReducer
});

export default rootReducer;
