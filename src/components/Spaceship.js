// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, `Name: ${this.props.name}`),
      React.createElement('li', {}, `Speed: ${this.props.speed}`),
      React.createElement('li', {}, `${this.props.hasRockets}`),
      React.createElement('li', {}, `Colors: ${this.props.colors.join(', ')}`)
    ])
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship;
