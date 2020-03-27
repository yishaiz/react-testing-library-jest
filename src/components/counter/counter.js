// counter.js
import React, { useState } from 'react';

// class Counter extends React.Component {
function Counter() {
  // state = { count: 0 };
  const [count, setCount] = useState(0);

  // increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  const incrementCount = () => setCount(count => count + 1);

  return <button onClick={incrementCount}>{count}</button>;
}

export default Counter;
