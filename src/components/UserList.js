import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  function renderUsers() {
    return props.users.map((user) => (
      <UserItem key={user.name} toggleCheckbox={props.toggleCheckbox} {...user} />
    ));
  }

  return <ul className="user-list">{renderUsers()}</ul>;
};

export default UserList;
