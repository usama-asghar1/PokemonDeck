import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardCollection from "./pages/CardCollection";
import CardDetails from "./pages/CardDetails/CardDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="cardCollection" element={<CardCollection />} />
        <Route path="cardDetails" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

