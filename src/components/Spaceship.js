import React from 'react';
// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
// Feel free to render out the data in any form you wish!

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets? {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false,
  speed: 'slow'
};
