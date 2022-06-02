import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
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
      <a href="/ZacitHrat">
        <img
          className="homepage_button homepage_button1"
          src={Play}
          alt="zacit-hrat"
        />
      </a>{' '}
      {''}
      <a href="/Pravidla">
        <img className="homepage_button" src={Question} alt="pravidla" />
      </a>
    </nav>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
