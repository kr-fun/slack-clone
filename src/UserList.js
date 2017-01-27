import React, { Component } from 'react';
import UserListItem from './UserListItem';

class UserList extends Component {
  render() {
    const renderListItems = () => {
      const { users } = this.props;

      return Object.keys(users).map((user, i) => {
        const you = user === this.props.nick ? ' (you)' : '';

        return (<UserListItem
          active={this.props.activeUser === user}
          online={users[user].online}
          hasNewMessages={users[user].hasNewMessages}
          key={i}
          onTouchTap={() => this.props.setActiveUser(user)}
          user={user + you}
        />);
      });
    };

    return (
      <div>
        <div className="DrawerListTitle">Users</div>

        <div>
          {renderListItems()}
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  activeUser: React.PropTypes.string,
  nick: React.PropTypes.string.isRequired,
  users: React.PropTypes.object.isRequired,
  setActiveUser: React.PropTypes.func.isRequired,
};

export default UserList;