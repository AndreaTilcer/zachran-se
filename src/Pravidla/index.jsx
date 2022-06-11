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

        <div className="rules_content">
          <h1 className="rules_heading">O hře Zachraň se</h1>
          <p>
            Vědomostně-vzdělávací hra Zachraň se je určena pro děti školního
            věku a klade si za cíl je naučit je, jak se správně zachovat v
            různých krizových situacích (např. na jakou nouzovou linku zavolat v
            případě potřeby, jak řešit požár, jak se zachovat při povodních, ale
            např. i běžné životní situace jako kde si můžeme rozdělat ohniště v
            přírodě).
          </p>

          <a href="http://andreatilcer.github.io/o-projektu/">web</a>

          <h1 className="rules_heading">Jak hrát</h1>
          <p>
            Hra bude interaktivní hrací pole s různými situacemi, kterými bude
            hráč procházet a řešit s nimi spojené úkoly. Při nesprávné odpovědi
            mu bude zobrazeno ideální řešení dané situace. V průběhu hry hráč
            získá body a v závěru bude vyhodnoceno, zda by v krizových situacích
            uspěl, a znovu si bude moct zopakovat, v čem má mezery.
          </p>
          <h1 className="rules_heading">Co je cílem hry</h1>
        </div>
      </div>
    </>
  );
};
