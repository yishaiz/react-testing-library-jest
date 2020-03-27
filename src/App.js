import React from 'react';
import Button from './components/button/button';

import Counter from './components/counter/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please" />
        
        <Counter/>
        {/* <Counter/> */}
      </header>
    </div>
  );
}

export default App;
