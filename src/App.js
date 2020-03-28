import React from 'react';
import Button from './components/button/button';

import Counter from './components/counter/counter';
import CounterClassComponent from './components/counter-class-component/counter';
import CounterWithUseEffect from './components/counter-with-use-effect/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please" />
        <Counter />
        <CounterClassComponent />
        <CounterWithUseEffect />
      </header>
    </div>
  );
}

export default App;
