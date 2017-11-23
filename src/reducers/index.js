import { combineReducers } from 'redux';

import lists from 'reducers/lists';

const sudokuApp = combineReducers({
  lists,
});
export default sudokuApp;
