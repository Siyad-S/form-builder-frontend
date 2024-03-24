import './App.css';
import Header from './components/Header/Header';
import Builder from './components/Builder/Builder';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("")
  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} />
      <Builder setTitle={setTitle} />
    </div>
  );
}

export default App;
