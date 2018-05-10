import React from 'react';

const UserItem = (props) => (
  <label htmlFor={props.name}>
    <input
      type="checkbox"
      className="user-item"
      value={props}
      id={props.name}
      onChange={() => props.toggleCheckbox(props)}
    />
    {props.name}
  </label>
);

export default UserItem;
