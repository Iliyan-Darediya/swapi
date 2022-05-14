import logo from './logo.svg';
import './App.css';
import { Context } from './Context';
import { useState, useContext, useEffect } from 'react';
import ListOfMovies from './component/ListOfMovies';
function App() {
  const {data} = useContext(Context)

  const [url,setUrl] = useState("")
  
  useEffect(()=>{
    console.log("dsds",url)
  },[url])
  return (
    <div className="container">
      <label>Character:</label>
      <select className="form-select" onChange={event=>setUrl(event.target.value)}>
        {data.map(item=><option key={item.name} value={item.url}>{item.name}</option>)}
      </select>
      <ListOfMovies url={url}/>
    </div>
  );
}

export default App;
