import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../Pravidla/style.css';
import './style.css';

import question from '../img/question.svg';
import home from '../img/home.svg';
import refresh from '../img/refresh.svg';

import { Results } from '../Results';

export const Vyhra = ({}) => {


  return (
    <>
      <div className="navbar_container">
        <nav className="victory_navigation">
          <Link to="/hra">
            <img className="victory_button" src={refresh} alt="hrat-znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="victory_button" src={home} alt="domu" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="victory_button" src={question} alt="pravidla" />{' '}
          </Link>
        </nav>
        <Outlet />

<Results />
      </div>
    </>
  );
};
