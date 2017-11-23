import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './style.scss';

export default class App extends PureComponent {
  static propTypes = {
    lists: ImmutablePropTypes.list,
    newListName: PropTypes.string,

    addNewList: PropTypes.func.isRequired,
    // setListName: PropTypes.func.isRequired,
    removeList: PropTypes.func.isRequired,
    setNewListName: PropTypes.func.isRequired,
  };

  onAddNewList = () => {
    this.props.addNewList();
  }

  onNewListNameChange = (e) => {
    this.props.setNewListName(e.target.value);
  }

  onNewListKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addNewList();
    }
  }

  onRemoveList = (index) => {
    this.props.removeList(index);
  }

  render() {
    return (
      <div className={styles['app-container']}>
        <div className={styles['lists-container']}>
          <div className={styles['lists']}>
            {
              this.props.lists.map((list, listIndex) => (
                <div
                  key={`list-${list.name}`}
                  className={styles['list']}
                >
                  <div className={styles['list-title']}>
                    {list.name}
                    <button
                      onClick={() => this.onRemoveList(listIndex)}
                    >
                      Remove list
                    </button>
                  </div>
                  {
                    list.items.map(item => (
                      <div key={`list-${list.name}-item-${item.name}`}>
                        <div>
                          {item.name}
                        </div>
                        <div>
                          {item.description}
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles['new-input']}>
          <input
            value={this.props.newListName}
            onChange={this.onNewListNameChange}
            onKeyPress={this.onNewListKeyPress}
          />
          <button
            onClick={this.onAddNewList}
          >
            Add New List
          </button>
        </div>
      </div>
    );
  }
}
