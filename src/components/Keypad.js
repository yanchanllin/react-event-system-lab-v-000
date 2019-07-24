<<<<<<< HEAD
import React from 'react';

class Keypad extends React.Component {

  Entering = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div className="keypad">
        <input type="password" onKeyUp={this.entering} />
=======
import React, { Component } from 'react';

export default class Keypad extends Component {

   Entering = () => {
     console.log('Entering password...')
   }

  render() {
    return (
      <div className="keyboard"
      <input type= "password" onKeyUp={this.entering}/>
>>>>>>> 64c42157374b2acbc352a673dc9fb78460203613
      </div>
    )
  }

<<<<<<< HEAD
};
export default Keypad;
=======
}
>>>>>>> 64c42157374b2acbc352a673dc9fb78460203613
