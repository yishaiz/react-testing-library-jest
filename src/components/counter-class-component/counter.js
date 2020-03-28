// counter.js
import React from 'react';

class Counter extends React.Component {
  state = { count: Number(window.localStorage.getItem('count')) || 0 };

  increment = () => this.setState(({ count }) => ({ count: count + 1 }));

  componentDidMount() {
    window.localStorage.setItem('count', this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count != this.state.count) {
      window.localStorage.setItem('count', this.state.count);
    }
  }

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}

export default Counter;

// const [count, setCount] = useState(0);
// import React, { useState } from 'react';
// const incrementCount = () => setCount(count => count + 1);
