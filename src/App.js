import React from 'react';
import Button from './components/button/button';

import Counter from './components/counter/counter';
import CounterClasComponent from './components/counter-class-component/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please" />
        
        <Counter/>
        <CounterClasComponent/>
        {/* <Counter/> */}
      </header>
    </div>
  );
}

export default App;
