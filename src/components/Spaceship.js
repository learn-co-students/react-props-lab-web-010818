import React from 'react';


export default class Spaceship extends React.Component {
  render(){
    return  <div className="spaceship">
      <h1> {this.props.name} </h1>
      <p> Speed: {this.props.speed} </p>
      <p> Has Rockets? {this.props.hasRockets.toString()} </p>
      <p> Colors: {this.props.colors.join(', ')} </p>

    </div>
  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}
