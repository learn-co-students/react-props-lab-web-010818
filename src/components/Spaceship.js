// // Code The Spaceship Component Here
// he components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
// Feel free to render out the data in any form you wish!
//
// Note: you'll need to export the Spaceship component, like this:
//
// export default class Spaceship extends React.Component { ... };
// // OR declare your component first, and then:
// export default Spaceship;

import React from 'react';
import ReactDom from 'react-dom'



class Spaceship extends React.Component{
  render(){
    const {name, speed, hasRockets, colors} = this.props
    return(
      <div>
      <h1>Rocket: {this.props.name}</h1>
      <p>Speed: {this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>Description: {this.props.colors.join(', ')}</p>
      </div>
    )

  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}


export default Spaceship
