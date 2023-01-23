import {Component } from 'react';

class LifeCycleTest extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'hi' };
    console.log('inside constructor  ');
  }
  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }
  render() {
    console.log('inside render');
    return (
      <>
        <div>{this.state.message}</div>
        <button
          onClick={() => {
            this.setState({ message: 'hello' });
          }}
        >
          Update state
        </button>
      </>
    );
  }
}

export default LifeCycleTest;
