import React from 'react';
import '../style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Play from '../img/play.svg';
import Home from '../img/home.svg';

export const Pravidla = () => {
  return (
    <>
      <div className="rules_container">
        <nav className="rules_navigation">
          <Link to="/hra">
            <img className="homepage_button" src={Play} alt="hrat-znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="homepage_button" src={Home} alt="domu" />
          </Link>{' '}
        </nav>
        <Outlet />

        <div>
          <h1 className="rules_heading">O hře Zachraň se</h1>

          <a href="http://andreatilcer.github.io/o-projektu/">web</a>
        </div>
        <div>
          <h1 className="rules_heading">Jak hrát</h1>
        </div>

        <div>
          <h1 className="rules_heading">Co je cílem hry</h1>
        </div>
      </div>
    </>
  );
};
