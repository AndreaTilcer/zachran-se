import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ZacitHrat } from './ZacitHrat';
import { Pravidla } from './Pravidla';
import Play from './img/play.svg';
import Question from './img/question.svg';
import Monkey from './img/monkey.svg';
import EmergencyCall from './img/emergency-call.svg';

const App = () => (
  <div className="homepage_container">
    <h1 className="heading">ZACHRAŇ SE</h1>

    <img className="homepage_monkey" src={Monkey} alt="opice" />
    <img className="homepage_call" src={EmergencyCall} alt="tisnove-volani" />
    <nav className="homepage_navigation">
      <Link to="/zacithrat">
        <img
          className="homepage_button homepage_button1"
          src={Play}
          alt="zacit-hrat"
        />
      </Link>{' '}
      <Link to="/pravidla">
        <img className="homepage_button" src={Question} alt="pravidla" />{' '}
      </Link>
    </nav>
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
