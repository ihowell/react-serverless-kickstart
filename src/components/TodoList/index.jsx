import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoListRecord from 'records/TodoListRecord';

import TodoItem from 'components/TodoItem';

import styles from './style.scss';

export default class TodoList extends PureComponent {
  static propTypes = {
    list: PropTypes.instanceOf(TodoListRecord).isRequired,

    addNewItem: PropTypes.func.isRequired,
    setNewItemName: PropTypes.func.isRequired,
    setNewItemDescription: PropTypes.func.isRequired,
    removeList: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
  };

  onNewItemDescriptionKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addNewItem();
    }
  }

  onNewItemNameChange = (e) => {
    this.props.setNewItemName(e.target.value);
  }

  onNewItemDescriptionChange = (e) => {
    this.props.setNewItemDescription(e.target.value);
  }

  onRemoveList = () => {
    this.props.removeList();
  }

  render() {
    return (
      <div className={styles['list']}>
        <div className={styles['list-title']}>
          {this.props.list.name}
          <button
            onClick={this.onRemoveList}
          >
            Remove list
          </button>
        </div>
        {
          this.props.list.items.map((item, itemIndex) => (
            <TodoItem
              key={`list-${this.props.list.name}-item-${item.name}`}
              item={item}
              removeItem={() => { this.props.removeItem(itemIndex); }}
            />
          ))
        }
        <div>
          <div>
            <input
              value={this.props.list.newItemName}
              onChange={this.onNewItemNameChange}
            />
          </div>
          <div>
            <textarea
              value={this.props.list.newItemDescription}
              onChange={this.onNewItemDescriptionChange}
              onKeyPress={this.onNewItemDescriptionKeyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}
