import {combineReducers} from 'redux';

import alcoholDataReducer from './alcoholDataSlice';
import mindTreeReducer from './mindTreeSlice';

const rootReducer = combineReducers({
  mindTree: mindTreeReducer,
  alcoholData: alcoholDataReducer,
});

export default rootReducer;
