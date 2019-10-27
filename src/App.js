import React from 'react';
import Navigation from './components/Nav';
import Contacts from './components/MainContact';
import 'bootstrap/dist//css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation brand="Contact Manager" button="home"></Navigation>
      <div className="container">
        <Contacts canDelete></Contacts>
      </div>
    </div>
  );
}

export default App;
