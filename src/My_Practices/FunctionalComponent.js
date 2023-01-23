import { useEffect, useState } from 'react';
/*
- hooks: 
-- useState: similar to setState
-- useEffect: combines componentDidMount, componentDidUpdate
*/

const Functional = () => {
  const [message, setMessage] = useState('hello');
  const [greeting, setGreetings] = useState('Good morning');

  /* useEffect(() => {
    console.log('Use effect called');
  }); */
  useEffect(() => {
    console.log('Use effect called');
  }, [message]);
  return (
    <div>
      <div>{message}</div>
      <div>{greeting}</div>

      <button
        onClick={() => {
          setMessage('new message');
        }}
      >
        Change Message
      </button>
      <button
        onClick={() => {
          setGreetings('Good night');
        }}
      >
        Change Greeting
      </button>
    </div>
  );
};

export default Functional;
