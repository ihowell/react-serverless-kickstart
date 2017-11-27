
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

export const addItemToList = (listIndex) => ({
  type: ADD_ITEM_TO_LIST,
  listIndex,
});

export const removeItemFromList = (listIndex, itemIndex) => ({
  type: REMOVE_ITEM_FROM_LIST,
  listIndex,
  itemIndex,
});
