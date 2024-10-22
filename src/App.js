import {useState} from 'react';
import {Html,Sql,Java} from "./Subject";
import './style.css';

function App() {
  const [pg,setpg]=useState(1)
  function changePage(pgNum){
    setpg(pgNum)
  }

  return (
    <div className="app-container">
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => changePage(1)}>Java</button>
        <button className="nav-button" onClick={() => changePage(2)}>SQL</button>
        <button className="nav-button" onClick={() => changePage(3)}>HTML</button>
      </div>
      <div className="content">
        {pg === 1 && <Java />}
        {pg === 2 && <Sql />}
        {pg === 3 && <Html />}
      </div>
    </div>
  );
}

export default App;
