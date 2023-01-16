import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/TextArea'
import { useState } from 'react';

function App() {
  const[mode, setMode]=useState("light")

  const changeMode = () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#9595cb';
    }
  }
  return (
    <>
      <Navbar navbarName="MyApp" home="Home" mode={mode} changemode={changeMode}/>
      <div className="container my-3">
        <Textarea mode={mode}/>
      </div>
    </>
  );
};

/* for testing the export and default export
function App2(){
  return (
    <>
      <a>Hello App2</a>
    </>
  )
}
*/

// export {App, App2} used in case we want to import multiple components
export default App // incase we want to export single component default is good option.
