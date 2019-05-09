import React, { Component } from 'react';

export default class testComponent extends Component {
      
      ClickHandler = () => {
        console.log("I was called")
      };
  
    render() {

      return (
          <div>
              <p>Test component test</p>
              <button onClick={this.ClickHandler.bind(this)}>Click me</button>
          </div>
      )
    }
}

