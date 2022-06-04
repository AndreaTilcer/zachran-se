import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
// import { useDrag } from 'react-dnd';

import '../style.css';
import './style.css';
import '../Hra/style.css';
import Refresh from '../img/refresh.svg';
import Question from '../img/question.svg';
import Home from '../img/home.svg';
import Monkey from '../img/monkey.svg';
import Heart from '../img/heart.svg';
import Tree1 from '../Hra/img/tree1.svg';
import Tree2 from '../Hra/img/tree2.svg';
import Tree3 from '../Hra/img/tree3.svg';
import Tree4 from '../Hra/img/tree4.svg';
import Situace1 from './img/chata.png';
import Flour from './img/flour.svg';
import FoodTray from './img/food-tray.svg';
import Hand from './img/hand.svg';
import Water from './img/water-gallon.svg';

export const Situace = () => {
  return (
    <>
      <div className="game_container">
        <nav className="game_navigation">
          <Link to="/hra">
            <img className="game_button" src={Refresh} alt="hrat-znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="game_button" src={Home} alt="domu" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="game_button" src={Question} alt="pravidla" />{' '}
          </Link>
        </nav>
        <div className="lifebar">
          <img className="lifebar_monkey" src={Monkey} alt="Opička" />
          <img className="lifebar_heart" src={Heart} alt="Život" />
          <img className="lifebar_heart" src={Heart} alt="Život" />
          <img className="lifebar_heart" src={Heart} alt="Život" />
          <img className="lifebar_heart" src={Heart} alt="Život" />
          <img className="lifebar_heart" src={Heart} alt="Život" />
        </div>
      </div>
      <Outlet />
      <div className="game">
        <div className="gamefield">
          <div className="tree tree1">
            <img src={Tree1} alt="Strom" />
          </div>
          <div className="tree tree2">
            <img src={Tree2} alt="Strom" />
          </div>
          <div className="tree tree3">
            <img src={Tree3} alt="Strom" />
          </div>
          <div className="tree tree4">
            <img src={Tree4} alt="Strom" />
          </div>
        </div>
      </div>
      <div className="chata_container">
        <h2 className="heading_2">
          Jak nejlépe uhasíš vznícený olej na pánvi?
        </h2>
        <img className="situace_1" src={Situace1} alt="Horici-panev" />
        <div className="answers">
          <p>
            {' '}
            <img className="ikona_1" src={Hand} alt="Stahnu-panev" /> <br></br>
            Stáhnu pánev z plotýnky a nechám oheň dohořet
          </p>
          <p>
            {' '}
            <img
              className="ikona_1"
              src={FoodTray}
              alt="Prikryji-poklici"
            />{' '}
            <br></br>Přikryji pánev poklicí a vařič vypnu
          </p>
          <p>
            {' '}
            <img className="ikona_1" src={Flour} alt="Zasypu-moukou" />{' '}
            <br></br>Oheň zasypu moukou
          </p>
          <p>
            {' '}
            <img className="ikona_1" src={Water} alt="Uhasim-vodou" /> <br></br>
            Vodou či vodním hasícím přístrojem
          </p>
        </div>
      </div>
    </>
  );
};
