import React from 'react';
import '../style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import play from '../img/play.svg';
import home from '../img/home.svg';
import monkey from '../img/monkey.svg';
import heart from '../img/heart.svg';
import stars from '../img/stars.svg';
import gamefieldPic from '../img/Gamefield_hint.gif';
import dndPic from '../img/DnD_hint.gif';
import clickPic from '../img/onClick_hint.gif';
import cottage from '../HraciPole/img/house.svg';

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
          <h1 className="rules_heading">
            <img className="rules_heading monkey" src={monkey} alt="opice" /> O
            hře Zachraň se
          </h1>
          <p className="rules_text">
            Vědomostně-vzdělávací hra Zachraň se je určena pro děti školního
            věku a klade si za cíl naučit je, jak se správně zachovat v různých
            krizových situacích (např. na jakou nouzovou linku zavolat v případě
            potřeby, jak řešit požár nebo jak se zachovat při povodních).
          </p>
          <p className="rules_text">
            Hra vznikla v rámci práce na projektu v rekvalifikačním kurzu
            Czechitas - Digitální akademie: Web. Více o projektu a jeho
            autorkách se můžete dočíst{' '}
            <a href="http://andreatilcer.github.io/o-projektu/">zde</a>.
          </p>

          <h1 className="rules_heading">Jak hrát</h1>
          <p className="rules_text">
            Hra funguje jako interaktivní hrací pole s různými situacemi,
            kterými hráč{' '}
            <img className="rules_icon monkey" src={monkey} alt="opice" />
            prochází a řeší s nimi spojené úkoly. Při nesprávné odpovědi je mu
            zobrazeno ideální řešení dané situace, ale také přichází o jeden
            život. <img
              className="rules_icon heart"
              src={heart}
              alt="srdce"
            />{' '}
            Hra je úspěšně zakončena, pokud hráč projde všemi situacemi a po
            vyřešení poslední z nich mu zůstane alespoň jeden život.{' '}
            <img className="rules_icon stars" src={stars} alt="hvězdy" />
          </p>
          <h2 className="heading_2">Jak tedy skutečně zahájit hru?</h2>
          <p>
            Hru spustíš kliknutím na ikonu{' '}
            <img className="rules_icon play" src={play} alt="hrát" /> na
            domovské obrazovce či přímo zde v pravidlech. Jakmile se ocitneš v
            hracím poli, stačí kliknout na ikonku domečku{' '}
            <img className="rules_icon cottage" src={cottage} alt="dům" />, kde
            na tebe bude čekat řešení první situace.
          </p>
          <img className="rules_hint" src={gamefieldPic} alt="hrací pole" />
          <div className="rules_content_container">
            <div className="rules_hint pc">
              <p>
                Pokud hraješ na počítači, správnou odpověď zvolíš potažením
                ikonky se správnou odpovědí do obrázku situace.
              </p>
              <img
                className="rules_hint pc"
                src={dndPic}
                alt="jak vybrat ikonu na počítači"
              />
            </div>
            <div className="rules_hint mobile">
              <p>
                V případě, že hraješ na tabletu či mobilním telefonu, stačí na
                ikonu se správnou odpovědí kliknout.
              </p>
              <img
                className="rules_hint mobile"
                src={clickPic}
                alt="jak vybrat ikonu na mobilu a tabletu"
              />
            </div>
          </div>
          <h1 className="rules_heading">Co je cílem hry</h1>
          <p className="rules_text">
            Cílem hry je naučit se hravou formou, jak v krizové situaci reagovat
            správně, a třeba se díky hře i doopravdy zachránit, pokud byste
            někdy čelili obdobné situaci v životě. V téhle hře tedy doopravdy
            platí, že není důležité vyhrát, ale zůčastnit se - a především
            poučit se.
          </p>
          <h2 className="heading_2">
            Hodně štěstí!{' '}
            <img className="rules_icon monkey" src={monkey} alt="opice" />
          </h2>
        </div>
      </div>
    </>
  );
};
