<<<<<<< HEAD
import React from 'react';

class EyesOnMe extends React.Component {

    focus = () => {
        console.log('Good!')
    };

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div className="eyes-on-me">
                <button onFocus={this.focus} onBlur={this.blur}>hey there?</button>
            </div>
        )
    }
};

export default EyesOnMe;
=======
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

   focus= () => {
     console.log('Good!')
   }
    blur = () => {
     console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div className="eyes-on-me"
      <button onFocus={this.focus} onBlur={this.blur} > hey there?</button>
      </div>
    )
  }

}
>>>>>>> 64c42157374b2acbc352a673dc9fb78460203613
