import { connect } from 'react-redux';

import App from 'components/App';

import {
  addNewList,
  setListName,
  removeList,
  setNewListName,
} from 'actions/listActions';

const mapStateToProps = (state) => ({
  lists: state.lists.get('lists'),
  newListName: state.lists.get('newListName'),
});

const mapDispatchToProps = (dispatch) => ({
  addNewList: (name) => {
    dispatch(addNewList(name));
  },
  setListName: (index, name) => {
    dispatch(setListName(index, name));
  },
  removeList: (index) => {
    dispatch(removeList(index));
  },
  setNewListName: (name) => {
    dispatch(setNewListName(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
