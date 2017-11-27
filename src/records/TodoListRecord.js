import Immutable, { Record } from 'immutable';

const TodoListRecord = Record({
  name: '',
  items: new Immutable.List(),

  newItemName: '',
  newItemDescription: '',
});

export default TodoListRecord;
