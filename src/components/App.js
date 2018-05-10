/* eslint no-restricted-syntax: 0, function-paren-newline: 0, no-shadow: 0 */
import React, { Component } from 'react';
import _ from 'lodash';

import UserList from './UserList';
import VenueList from './VenueList';

import users from '../data/users.json';
import venues from '../data/venues.json';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUsers: [],
      venues: [],
      goodVenues: [],
      badVenues: [],
    };
  }

  componentWillMount() {
    this.setState({ users, venues });
  }

  toggleCheckbox = (user) => {
    let selectedUsers;

    if (_.some(this.state.selectedUsers, user)) {
      selectedUsers = this.state.selectedUsers.filter(
        (selectedUser) => selectedUser.name !== user.name
      );
    } else {
      selectedUsers = this.state.selectedUsers.slice();
      selectedUsers.push(user);
    }

    this.venueFinder(this.state.venues, selectedUsers);
  };

  venueFinder(venues, selectedUsers) {
    const goodVenues = [];
    const badVenues = [];

    for (const venue of venues) {
      const usersWhoCantEat = [];
      const usersWhoCantDrink = [];

      for (const user of selectedUsers) {
        if (canUserEatHere(venue, user) === false) {
          usersWhoCantEat.push(user.name);
        }

        if (canUserDrinkHere(venue, user) === false) {
          usersWhoCantDrink.push(user.name);
        }
      }

      if (usersWhoCantEat.length === 0 && usersWhoCantDrink.length === 0) {
        goodVenues.push(venue);
      } else {
        badVenues.push({ name: venue.name, usersWhoCantEat, usersWhoCantDrink });
      }
    }

    this.setState({ goodVenues, badVenues, selectedUsers });
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} toggleCheckbox={this.toggleCheckbox} />
        <VenueList
          venues={this.state.venues}
          goodVenues={this.state.goodVenues}
          badVenues={this.state.badVenues}
        />
      </div>
    );
  }
}

function canUserEatHere(venue, user) {
  return !(_.intersection(venue.food, user.wont_eat).length === venue.food.length);
}

function canUserDrinkHere(venue, user) {
  return _.intersection(venue.drinks, user.drinks).length > 0;
}

export default App;
