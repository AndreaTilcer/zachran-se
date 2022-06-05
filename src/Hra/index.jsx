import React from 'react';
import '../style.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Refresh from '../img/refresh.svg';
import Question from '../img/question.svg';
import Home from '../img/home.svg';
import Monkey from '../img/monkey.svg';
import Heart from '../img/heart.svg';
import Tree1 from './img/tree1.svg';
import Tree2 from './img/tree2.svg';
import Tree3 from './img/tree3.svg';
import Tree4 from './img/tree4.svg';
import { HraciPole } from '../HraciPole';
import { Situace } from '../Situace';
import { situations } from '../databaze';
import { lives } from '../databaze';

import { useState } from 'react';
import { useEffect } from 'react';

export const Hra = () => {
  const [situation, setSituation] = useState({});
  const [showGamefield, setShowGamefield] = useState(true);

  const [lifebar, setLifebar] = useState(lives[0]);

  const [i, setI] = useState(1);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleOnSelect = (id) => {
    const oneSituation = situations.filter((item) => item.id === Number(id));
    setSituation(oneSituation[0]);
    console.log(oneSituation[0]);
    setShowGamefield(false);
  };

  const handleContinue = () => {
    isAnswerCorrect ? setShowGamefield(true) : setShowGamefield(false);
  };

  const handleOnAnswer = (isCorrect) => {
    isCorrect ? null : removeLife();
    setIsAnswerCorrect(isCorrect);
  };

  const removeLife = () => {
    setI(i + 1);
    i < lives.length - 1 ? setLifebar(lives[i]) : console.log('Game Over');
  };

  return (
    <>
      <div className="game_container">
        <nav className="game_navigation">
          <Link to="]/hra">
            <img className="game_button" src={Refresh} alt="hrat-znovu" />
          </Link>{' '}
          <Link to="/">
            <img className="game_button" src={Home} alt="pravidla" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="game_button" src={Question} alt="pravidla" />{' '}
          </Link>
        </nav>
        <div className="lifebar">
          <img className="lifebar_monkey" src={Monkey} alt="Opička" />
          {lifebar.map((item) => (
            <img src={item} className="lifebar_heart" />
          ))}
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
          {showGamefield ? (
            <HraciPole onSelect={handleOnSelect} />
          ) : (
            <Situace
              onAnswer={handleOnAnswer}
              onContinue={handleContinue}
              key={situation.id}
              heading={situation.heading}
              image={situation.image}
              altText={situation.altText}
              answers={situation.answers}
            />
          )}
        </div>
      </div>
    </>
  );
};
