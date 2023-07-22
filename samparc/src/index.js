import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

import Home from './App';
import Quiz from './components/quiz';
import Login from './components/Login'

import './index.css';
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Login" element={<Login />} />
        <Route index path="/Quiz" element={<Quiz />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
