import React from 'react';
import VenueItem from './VenueItem';

const VenueList = (props) => {
  function renderGoodVenues() {
    if (props.goodVenues.length === 0) {
      return props.venues.map((venue) => <VenueItem key={venue.name} {...venue} />);
    }

    return props.goodVenues.map((venue) => <VenueItem key={venue.name} {...venue} />);
  }

  function renderBadVenues() {
    return props.badVenues.map((venue) => <VenueItem key={venue.name} {...venue} />);
  }

  return (
    <div className="venue-list">
      <ul className="good-venues-list">
        <div className="title">PLACES TO GO:</div>
        {renderGoodVenues()}
      </ul>
      <ul className="bad-venues-list">
        <div className="title">PLACES TO AVOID:</div>
        {renderBadVenues()}
      </ul>
    </div>
  );
};

export default VenueList;
