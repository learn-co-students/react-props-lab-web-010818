// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

// Spaceship.propTypes = {
//   title:PropTypes.string,
//   speed:PropTypes.number,
//   hasRockets:PropTypes.bool,
//   colors:PropTypes.array
// }
Spaceship.defaultProps = {
  speed:'slow',
  hasRockets:false,
  colors:['black', 'red']
}

export default Spaceship;
