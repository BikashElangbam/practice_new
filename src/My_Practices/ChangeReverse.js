import { Component } from 'react';

/*
2 types of components:

- class component
- function components

*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    };
  }

  changeMessage() {
    // cannot update state directly, we need setState
    // this.state.message = 'Good morning' <- WRONG
    this.setState({   
      message: 'Good morning'  
    });
  }

  reverseMessage() {
    const msg = this.state.message
    let reverseMsg = msg.split("").reverse().join("")
    this.setState({    
      message: reverseMsg   
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Change</button>
        <button onClick={() => this.reverseMessage()}>Reverse</button>
      </div>
    );
  }
}

export default App;
