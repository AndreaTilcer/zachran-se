import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
// import { useDrag } from 'react-dnd';

import './style.css';
import Situace1 from './img/chata.png';
import Flour from './img/flour.svg';
import FoodTray from './img/food-tray.svg';
import Hand from './img/hand.svg';
import Water from './img/water-gallon.svg';

export const Situace = () => {
  return (
    <>
      <div className="situace_container">
        <h2 className="heading_2">
          Jak nejlépe uhasíš vznícený olej na pánvi?
        </h2>
        <img className="situace_1" src={Situace1} alt="Horici-panev" />
        <div className="answers">
          <div className="icon_container">
            <img className="ikona_1" src={Hand} alt="Stahnu-panev" />
            <p>Stáhnu pánev z plotýnky a nechám oheň dohořet</p>
          </div>
          <div className="icon_container">
            <img className="ikona_1" src={FoodTray} alt="Prikryji-poklici" />
            <p>Přikryji pánev poklicí a vařič vypnu</p>
          </div>
          <div className="icon_container">
            <img className="ikona_1" src={Flour} alt="Zasypu-moukou" />
            <p>Oheň zasypu moukou</p>
          </div>
          <div className="icon_container">
            <img className="ikona_1" src={Water} alt="Uhasim-vodou" />
            <p>Vodou či vodním hasícím přístrojem</p>
          </div>
        </div>
      </div>
    </>
  );
};
