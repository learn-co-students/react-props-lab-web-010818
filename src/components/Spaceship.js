// Code The Spaceship Component Here

import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div className="spaceship">
        <h1> Spaceship Name: {name}</h1>
        <p> Ship Info: </p>
        <ul>
          <li>Speed: {speed}</li>
          <li>Rockets: {hasRockets ? "Of Course" : "Fuck That"}</li>
          <li>Colors:</li>
          <ul>
          {colors.map((color, index) => <li> {colors[index]}</li>)}
          </ul>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;




//
// class Spaceship extends React.Component {
//   render() {
//     const { name, speed, hasRockets, colors } = this.props;
//
//     return (
//       <div>
//         <h1>Spaceship Name: {name}</h1>
//         <p>Ship Info:</p>
//         <p>Speed: {speed}</p>
//         <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
//         <ul>
//           {colors.map((color, index) => <li key={index}>{color}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }
//
// Spaceship.defaultProps = {
//   speed: 'slow',
//   hasRockets: false,
//   colors: ['black', 'red']
// }
//
// export default Spaceship;
