import { Component } from 'react';
import './App.css';
class KeyDetail extends Component {
  constructor(props) {
    // props = {value: '', property: ''}
    super(props);
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='property'>{this.props.property}</div>
        <div
          className='value'
          /* style={{
            border: '1px solid',
            padding: '10px',
          }} */
        >
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default KeyDetail;
