import React from 'react';
import '../style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import play from '../img/play.svg';
import home from '../img/home.svg';

export const Pravidla = () => {
  return (
    <>
      <div className="rules_container">
        <nav className="rules_navigation">
          <Link to="/hra">
            <img className="homepage_button" src={play} alt="Hrát znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="homepage_button" src={home} alt="Domů" />
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
