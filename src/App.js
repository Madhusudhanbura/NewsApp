import './App.css';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_NEWS_API_KEY

  const [progress, setProgress] = useState(0); 

  
  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress= {progress}
      />
      <Router>
        {<NavBar/>}
        <Routes>
          <Route path='/' element={<News apikey={apikey} setProgress={setProgress} key='General' pageSize={pageSize} country='in' category='general' />}/>
          <Route path='/business' element={<News apikey={apikey} setProgress={setProgress} key='Business' pageSize={pageSize} country='in' category='business'/>}/>
          <Route path='/entertainment' element={<News apikey={apikey} setProgress={setProgress} key='Entertainment' pageSize={pageSize} country='in' category='entertainment'/>}/>
          <Route path='/general' element={<News apikey={apikey} setProgress={setProgress} key='General' pageSize={pageSize} country='in' category='general'/>}/>
          <Route path='/health' element={<News apikey={apikey} setProgress={setProgress} key='Health' pageSize={pageSize} country='in' category='health'/>}/>
          <Route path='/science' element={<News apikey={apikey} setProgress={setProgress} key='Science' pageSize={pageSize} country='in' category='science'/>}/>
          <Route path='/sports' element={<News apikey={apikey} setProgress={setProgress} key='Sports' pageSize={pageSize} country='in' category='sports'/>}/>
          <Route path='/technology' element={<News apikey={apikey} setProgress={setProgress} key='Technology' pageSize={pageSize} country='in' category='technology'/>}/>
        </Routes>
      </Router>
    </div>
  )
  
}




export default App;
