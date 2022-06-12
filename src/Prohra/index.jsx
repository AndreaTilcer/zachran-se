import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../Vyhra/style.css';
import './style.css';

import question from '../img/question.svg';
import home from '../img/home.svg';
import cryingMonkey from './img/crying-monkey.png';
import fire from './img/fire.svg';
import refresh from '../img/refresh.svg';

export const Prohra = () => {
  return (
    <>
      <div className="navbar_container">
        <nav className="victory_navigation">
          <Link to="/hra">
            <img className="victory_button" src={refresh} alt="Hrát znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="victory_button" src={home} alt="Domů" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="victory_button" src={question} alt="Pravidla" />{' '}
          </Link>
        </nav>
        <Outlet />

        <div className="victory_container">
          <h1 className="heading">PROHRÁL/A JSI!</h1>
          <div className="victory_picture">
            <img className="loss_monkey" src={cryingMonkey} alt="opice" />
            <img className="loss_fire" src={fire} alt="oheň" />
          </div>
        </div>
      </div>
    </>
  );
};
