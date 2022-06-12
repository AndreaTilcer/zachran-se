import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Hra } from './Hra';
import { Pravidla } from './Pravidla';
import play from './img/play.svg';
import question from './img/question.svg';
import monkey from './img/monkey.svg';
import emergencyCall from './img/emergency-call.svg';
import { Situace } from './Situace';
import { Vyhra } from './Vyhra';
import { Prohra } from './Prohra';
import { Helmet } from 'react-helmet';

const App = () => (
  <>
    <div>
      <Helmet>
        <title>Zachraň se</title>
      </Helmet>
    </div>
    <div className="homepage_container">
      <h1 className="heading">ZACHRAŇ SE</h1>
      <div className="homepage_picture">
        <img className="homepage_monkey" src={monkey} alt="Opice" />
        <img
          className="homepage_call"
          src={emergencyCall}
          alt="Tísňové volání"
        />
      </div>
      <nav className="homepage_navigation">
        <Link to="/hra">
          <img
            className="homepage_button homepage_button1"
            src={play}
            alt="zacit-hrat"
          />
        </Link>{' '}
        <Link to="/pravidla">
          <img className="homepage_button" src={question} alt="pravidla" />{' '}
        </Link>
      </nav>
      <Outlet />
    </div>
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="hra" element={<Hra />} />
      <Route path="pravidla" element={<Pravidla />} />
      <Route path="situace" element={<Situace />} />
      <Route path="vyhra" element={<Vyhra />} />
      <Route path="prohra" element={<Prohra />} />
    </Routes>
  </BrowserRouter>,
);
