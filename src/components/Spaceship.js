// Code The Spaceship Component Here
import React from 'react'
// import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component{
  render(){
    const {name,speed,hasRockets,colors}=this.props
    return(
      <div>
        <h1>Spaceship Specs</h1>
        <p>Name:{name}</p>
        <p>Speed:{speed}</p>
        <p>Rockets:{hasRockets ? "Yes" : "No"}</p>
        <p>Colors:{colors}</p>
        <p></p>
      </div>
    )
  }
}

Spaceship.defaultProps={
  speed:  'slow',
  colors: ['black', 'red'],
  hasRockets: false


}
