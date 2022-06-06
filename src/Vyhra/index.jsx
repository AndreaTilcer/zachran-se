import React from 'react';
import '../Pravidla/style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Play from '../img/play.svg';
import Question from '../img/question.svg';
import Home from '../img/home.svg';
import Monkey from '../img/monkey.svg';
import stars from '../img/stars.svg';
import Refresh from '../img/refresh.svg';

export const Vyhra = () => {
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
          <h1 className="heading">ZACHRÁNIL/A SES!</h1>
          <div className="victory_picture">
            <img className="victory_monkey" src={Monkey} alt="opice" />
            <img className="victory_stars" src={stars} alt="hvězdy" />
          </div>
        </div>
      </div>
    </>
  );
};
