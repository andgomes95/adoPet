import React from 'react';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Home />
      <Rodape />
    </div>
  );
}

export default App;
