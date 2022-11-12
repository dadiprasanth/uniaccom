import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {useEffect, useState}from "react"

import Cards from './components/Cards';

function App() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos").then(x=>x.json()).then(y=>setdata(y))

      
  },[])
  return (
    <div className="App">
      <Header/>
      <Cards data={data}/>
    </div>
  );
}

export default App;  
