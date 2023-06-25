import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Quiz from './components/quiz';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Quiz" element={<Quiz />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
