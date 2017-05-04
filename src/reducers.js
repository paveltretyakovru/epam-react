// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  routing: routerReducer,
})
