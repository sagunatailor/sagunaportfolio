import React from "react";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes, // instead of "Switch"
} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<BrowserRouter>
  <Routes>
    <Route path="/" element={ <App /> }></Route>
  </Routes>
</BrowserRouter>
</React.StrictMode>
);