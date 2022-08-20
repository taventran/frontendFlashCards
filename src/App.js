import './App.css';
import React, {useState, useEffect} from 'react';
import SetList from './components/set'

function App() {
  const [sets, setSet] = useState(['default']);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/sets/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(resp => resp.json())
    .then(resp => setSet(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Layout">
        <SetList sets={sets}/>
      </div>
    </div>
  );
}

export default App;
