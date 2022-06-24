import './App.css';
import  { useState } from 'react';
import {Header} from './components/header/Header';
import {Body} from './components/body/Body';
function App() {
  const [titleHeader , setHeadertitle] = useState("header")
  const [titleBody , setBodytitle] = useState()
  return (
    <div className='App'>
      <Header title={titleHeader} setHeadertitle ={setHeadertitle}></Header>
      <Body title={titleBody} setBodytitle = {setBodytitle}></Body>
      </div>


  );
}
export default App;
