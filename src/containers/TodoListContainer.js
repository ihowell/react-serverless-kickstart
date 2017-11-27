import { connect } from 'react-redux';

import TodoList from 'components/TodoList';

import {
  setListName,
  removeList,
  setNewItemName,
  setNewItemDescription,
} from 'actions/listActions';

import {
  addItemToList,
  removeItemFromList,
} from 'actions/itemActions';

const mapStateToProps = (state, ownProps) => ({
  list: ownProps.list,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewItem: () => {
    dispatch(addItemToList(ownProps.listIndex));
  },
  setListName: (name) => {
    dispatch(setListName(ownProps.listIndex, name));
  },
  setNewItemName: (name) => {
    dispatch(setNewItemName(ownProps.listIndex, name));
  },
  setNewItemDescription: (description) => {
    dispatch(setNewItemDescription(ownProps.listIndex, description));
  },
  removeList: () => {
    dispatch(removeList(ownProps.listIndex));
  },
  removeItem: (itemIndex) => {
    dispatch(removeItemFromList(ownProps.listIndex, itemIndex));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
