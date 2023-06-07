import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css/index.css';
import App from './App';
import EditContact from './editContact'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);


