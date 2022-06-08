import React from 'react';
import '../Vyhra/style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Play from '../img/play.svg';
import Question from '../img/question.svg';
import Home from '../img/home.svg';
import cryingMonkey from './img/crying-monkey.png';
import fire from './img/fire.svg';
import Refresh from '../img/refresh.svg';
import { lives } from "../databaze.js";

export const Prohra = () => {
  return (
    <>
      <div className="navbar_container">
        <nav className="victory_navigation">
          <Link to="/hra">
            <img className="victory_button" src={Refresh} alt="hrat-znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="victory_button" src={Home} alt="domu" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="victory_button" src={Question} alt="pravidla" />{' '}
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
