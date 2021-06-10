import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let value = 'init'

  return (
    <muy-input placeholder="React Input" label="React" slInput={(evt) => this.value = evt.target.value}>
      <span slot="prefix">1</span>
      <span slot="suffix">{value}</span>
    </muy-input>
  );
}

export default App;
