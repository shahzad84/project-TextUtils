// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {BrowserRouter as BrowserRouter,Routes, Route} from "react-router-dom"


// let name="shahzad";
function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not (setMode("new mode") is the correct way to change the state)
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="shahzad" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
        {/* it shows that only one route shows at a time */}
      
      </div>
    </BrowserRouter>    
    </>
  );
}

export default App;
