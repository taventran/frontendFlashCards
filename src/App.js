import './App.css';
import React, {useState, useEffect} from 'react';
import SetList from './components/set'
import Cards from './components/cards'


function App() {

  const [sets, setSet] = useState(['default']);

  const[selectedSet, setSelectedSet] = useState(null);

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
  

  const chooseSet = set => {
    setSelectedSet(set);
  }

  const resetSet = () => {
    setSet(null);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <SetList sets={sets} resetSet={resetSet} setClicked={chooseSet}/>
        <Cards set={selectedSet} />
      </div>
    </div>
  );
}

export default App;
