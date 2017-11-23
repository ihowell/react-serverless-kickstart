import Immutable, { Record } from 'immutable';

const TodoList = Record({
  name: '',
  items: new Immutable.List(),
});

export default TodoList;
