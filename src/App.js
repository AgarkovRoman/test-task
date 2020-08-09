import React from 'react';
import './App.css';
import data from './data/data.json';
import { MainTable } from './components/MainTable/MainTable'

function App() {
  return (
    <MainTable data={data} />
  );
}

export default App;
