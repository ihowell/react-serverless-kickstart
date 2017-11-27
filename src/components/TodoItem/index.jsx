import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoItemRecord from 'records/TodoItemRecord';

import styles from './style.scss';

export default class TodoList extends PureComponent {
  static propTypes = {
    item: PropTypes.instanceOf(TodoItemRecord).isRequired,

    removeItem: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={styles['item']}>
        <div className={styles['item-title-bar']}>
          <div className={styles['item-title']}>
            {this.props.item.name}
          </div>
          <div
            className={styles['remove-item']}
            onClick={this.props.removeItem}
          >
            X
          </div>
        </div>
        <div>
          {this.props.item.description}
        </div>
      </div>
    );
  }
}
