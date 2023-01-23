import { Component } from 'react';
const contentsArray = [
  { name: 'John' },
  { name: 'tseting Max' },
  { name: 'Mikey' },
];

class KeyListener extends Component {
  constructor(props) {
    super(props);
  }
  // declarative rendering

  render() {
    return (
      <div>
        {contentsArray.map((el, key) => {
          return <div key={key}>{el.name}</div>;
        })}
      </div>
    );
  }
}

export default KeyListener;
