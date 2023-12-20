import {combineReducers} from 'redux';

import mindTreeReducer from './mindTreeSlice';

const rootReducer = combineReducers({
  mindTree: mindTreeReducer,
});

export default rootReducer;
