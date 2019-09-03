import React from 'react';
import Navigation from './components/Nav';
import AddContact from './components/DeleteContact';
import Contacts from './components/ContactState';
import 'bootstrap/dist//css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navigation brand='Contact Manager' button='home'></Navigation>
      <div className='container'>
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
