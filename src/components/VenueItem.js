/* eslint consistent-return: 0 */
import React from 'react';

const VenueItem = (props) => {
  function renderEatReasons() {
    if (props.usersWhoCantEat) {
      return (
        <ul className="eat-reasons">
          {props.usersWhoCantEat.map((user) => <li key={user}>{user} has nothing to eat here.</li>)}
        </ul>
      );
    }
  }

  function renderDrinkReasons() {
    if (props.usersWhoCantDrink) {
      return (
        <ul className="drink-reasons">
          {props.usersWhoCantDrink.map((user) => (
            <li key={user}>{user} has nothing to drink here.</li>
          ))}
        </ul>
      );
    }
  }

  return (
    <li className="venue-item">
      <div className="venue">{props.name}</div>
      {renderEatReasons()}
      {renderDrinkReasons()}
    </li>
  );
};

export default VenueItem;
