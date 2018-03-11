// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props
    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <h2>Speed: {speed}</h2>
        <p>Rockets: {hasRockets}</p>
        <ul>Colors: {colors.map((color, index) => <li key={index}>{color}</li>)}</ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship
