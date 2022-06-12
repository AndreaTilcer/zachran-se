import React from 'react';
import '../Pravidla/style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Question from '../img/question.svg';
import Home from '../img/home.svg';
import Monkey from '../img/monkey.svg';
import stars from '../img/stars.svg';
import Refresh from '../img/refresh.svg';
import { Results } from '../Results';

export const Vyhra = ({}) => {


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

<Results />
      </div>
    </>
  );
};
