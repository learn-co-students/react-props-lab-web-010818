import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets ? 'yes' : 'no'}</p>
        <p>Colors: {this.props.colors.map((c) => <li>{c}</li>)}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
