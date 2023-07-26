import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

import Home from './App';
import Quiz from './components/quiz';
import Register from './components/Register'
import Login from './components/Login';
import Leaderboard from './components/leaderboard';
import Profile from './components/profile';

import './index.css';
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Register" element={<Register />} />
        <Route index path="/Login" element={<Login />} />
        <Route index path="/Quiz" element={<Quiz />} />
        <Route index path="/Profile" element={<Profile />} />
        <Route index path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
