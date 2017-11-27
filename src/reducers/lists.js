import Immutable from 'immutable';

import {
  ADD_NEW_LIST,
  SET_LIST_NAME,
  REMOVE_LIST,
  SET_NEW_LIST_NAME,
  SET_NEW_ITEM_NAME,
  SET_NEW_ITEM_DESCRIPTION,
} from 'actions/listActions';

import {
  ADD_ITEM_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
} from 'actions/itemActions';

import TodoListRecord from 'records/TodoListRecord';
import TodoItemRecord from 'records/TodoItemRecord';

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
        s.set('lists', s.get('lists').push(new TodoListRecord({ name: s.get('newListName') })));
        s.set('newListName', '');
      }
    });

  case SET_LIST_NAME:
    return state.setIn(['lists', action.index, 'name'], action.name);

  case REMOVE_LIST:
    return state.set('lists', state.get('lists').delete(action.index));

  case SET_NEW_LIST_NAME:
    return state.set('newListName', action.name);

  case ADD_ITEM_TO_LIST:
    return state.withMutations(s => {
      const newItemName = s.getIn(['lists', action.listIndex, 'newItemName']);
      if (
        newItemName
        && !s.getIn(['lists', action.listIndex, 'items']).find(item => item.name === newItemName)
      ) {
        s.setIn(['lists', action.listIndex, 'items'],
          s.getIn(['lists', action.listIndex, 'items']).push(
            new TodoItemRecord({
              name: newItemName,
              description: s.getIn(['lists', action.listIndex, 'newItemDescription']),
            })
          )
        );
        s.setIn(['lists', action.listIndex, 'newItemName'], '');
        s.setIn(['lists', action.listIndex, 'newItemDescription'], '');
      }
    });

  case REMOVE_ITEM_FROM_LIST:
    return state.withMutations(s => {
      s.setIn(
        ['lists', action.listIndex, 'items'],
        s.getIn(['lists', action.listIndex, 'items']).delete(
          action.itemIndex
        )
      );
    });

  case SET_NEW_ITEM_NAME:
    return state.setIn(['lists', action.listIndex, 'newItemName'], action.name);

  case SET_NEW_ITEM_DESCRIPTION:
    return state.setIn(['lists', action.listIndex, 'newItemDescription'], action.description);

  default:
    return state;
  }
};

export default lists;
