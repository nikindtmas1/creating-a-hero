import React, {FC} from 'react';

import './App.css';
import AddHero from './components/AddHero';


const App:FC = () => {
  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <AddHero />
    </div>
  );
}

export default App;
