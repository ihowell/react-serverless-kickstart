export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const SET_LIST_NAME = 'SET_LIST_NAME';
export const REMOVE_LIST = 'REMOVE_LIST';
export const SET_NEW_LIST_NAME = 'SET_NEW_LIST_NAME';

export const addNewList = () => ({
  type: ADD_NEW_LIST,
});

export const setListName = (index, name) => ({
  type: SET_LIST_NAME,
  index,
  name,
});

export const removeList = (index) => ({
  type: REMOVE_LIST,
  index,
});

export const setNewListName = (name) => ({
  type: SET_NEW_LIST_NAME,
  name,
});
