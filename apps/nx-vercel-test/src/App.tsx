import { useEffect } from 'react';

import logo from './logo.svg';

import './App.css';

function App() {
  useEffect(() => {
    console.log({ ENV: process.env });
  }, []);

  const onClick = () => {
    console.log('clicked');

    throw new Error(
      `⚠️ Error controlado para 'Pruebas Setry' - ${new Date().toLocaleDateString()}`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.NX_TITLE}</h1>

        <p>{process.env.NX_DESCRIPTION}</p>

        <button
          onClick={onClick}
          style={{
            width: 'fit-content',
            height: 'auto',
            padding: '10px 15px',
            borderRadius: '12px',
            color: 'white',
            backgroundColor: '#2A9B7D',
          }}
        >
          ¡Generar error para Sentry!
        </button>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
