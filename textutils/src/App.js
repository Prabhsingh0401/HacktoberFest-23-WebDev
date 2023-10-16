// import logo from './logo.svg';
import './App.css'; //Imp thing
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
// --openssl-legacy-provider

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// let name = "Harry";
function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enables or not
  // const [color, setColor] = useState('dark'); 
  const [Text, setText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removebodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removebodyClasses(); 
    document.body.classList.add('bg-'+cls) 
    if (mode === 'light') {
      setMode('dark')
      // setColor('light')
      setText('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "success")
      // document.title = 'TextUtils - DarkMode'

      // for flashing the title =>
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else {
      setMode('light')
      // setColor('dark')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode Disabled", "success")
      // document.title = 'TextUtils - LightMode' 
    }
  }
  return (
    // delete nodemodules when sharing react app and it can be reinstalled using npm install
    // <>
    // <h1>This is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Kabir
    //     </a>
    //   </header>
    // </div>
    // </>

    /* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    {/* <img src="" alt="" />  */
    /* <div className="container">
      <h1>Hello {name}</h1>
      Lorem ipsum dolor sit Hello amet consectetur adipisicing elit. Soluta accusamus ea accusantium, molestias nam quia pariatur eos quidem, debitis magnam commodi? Tempore, hic repudiandae mollitia dignissimos repellendus a dicta delectus aliquam iusto ipsa minus.
    </div> */


    <>
      {/*color={color}*/}
      <Router>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} Text={Text}/>
      {/* <Navbar/> // if we dont pass the values for the props the default values will be taken instead  */}
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes> 
          {/* React does partial matching on path so use exact path  */}
          {/* /users --> Component 1
          /users/home --> Component 2 */}
          <Route exact path="/About" element = {<About mode = {mode}/>} />
          {/* <About mode = {mode}/> */}
          <Route exact path="/"  element = {<TextForm showAlert={showAlert} heading="Try TextUtils - Word-Counter, Character Counter, Remove ExtraSpaces " mode={mode} />}/>
          {/* <TextForm showAlert={showAlert} heading="Enter your Text to Analyze" mode={mode} /> */}
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter your Text to Analyze" mode={mode} /> */}
      </div>
      {/* <About></About>  */}
      </Router>
    </>
  );
}

export default App;
