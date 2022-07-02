import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Comp from './components/comp';


import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Route, Router, Routes} from 'react-router-dom'

import { InputLabel,MenuItem,FormControl,Select,TextField,Card, CardContent, Grid, Typography, Button } from '@material-ui/core'


const App = ()=>{
  return(
    
      <div className="App">
        
        <div className='content'>
         
          <Home/>

        </div>

      </div>
   

  );
}

export default App;
