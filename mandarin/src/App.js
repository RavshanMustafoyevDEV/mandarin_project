import React from 'react'
import FirstPage from './Components/FirstPage';
import Navbar from './Components/Navbar';
import SecondPage from './Components/SecondPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <FirstPage/>
      <SecondPage/>
    </div>
  );
};

export default App