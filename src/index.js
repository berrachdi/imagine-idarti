import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comp from './components/comp'
import reportWebVitals from './reportWebVitals';
import BookingCheker from './components/BookingChecker';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/booking-services" element={<BookingCheker />} />
      
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>
);


