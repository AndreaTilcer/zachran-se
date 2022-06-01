import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ZacitHrat } from './ZacitHrat';
import { Pravidla } from './Pravidla';

const App = () => (
  <div className="container">
    <h1>Zachraň se</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/zacithrat">Začít hrát</Link> |{' '}
      <Link to="/pravidla">Pravidla</Link>
    </nav>
    <Outlet />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="zacithrat" element={<ZacitHrat />} />
        <Route path="pravidla" element={<Pravidla />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
