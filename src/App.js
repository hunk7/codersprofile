import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import Example from './components/Navbar/Example.jsx';
import Container from './components/Container/Container.jsx';

function App() {
  return (

      <div>
        <Example/>
        <Container/>
      </div>

  );
}

export default App;
