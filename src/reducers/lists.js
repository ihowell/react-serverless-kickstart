import Immutable from 'immutable';

import {
  ADD_NEW_LIST,
  SET_LIST_NAME,
  REMOVE_LIST,
  SET_NEW_LIST_NAME,
} from 'actions/listActions';

import TodoList from 'records/TodoList';

const initialState = Immutable.Map({
  lists: new Immutable.List(),
  newListName: '',
});

const lists = (state = initialState, action) => {
  switch (action.type) {

  case ADD_NEW_LIST:
    return state.withMutations(s => {
      if (
        s.get('newListName')
        && !s.get('lists').find(list => list.name === s.get('newListName'))
      ) {
        s.set('lists', s.get('lists').push(new TodoList({ name: s.get('newListName') })));
        s.set('newListName', '');
      }
    });

  case SET_LIST_NAME:
    return state.setIn(['lists', action.index, 'name'], action.name);

  case REMOVE_LIST:
    return state.set('lists', state.get('lists').delete(action.index));

  case SET_NEW_LIST_NAME:
    return state.set('newListName', action.name);

  default:
    return state;
  }
};

export default lists;
