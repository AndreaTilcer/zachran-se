import React from 'react';
import '../style.css';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import question from '../img/question.svg';
import home from '../img/home.svg';
import monkey from '../img/monkey.svg';
import tree1 from './img/tree1.svg';
import tree2 from './img/tree2.svg';
import tree3 from './img/tree3.svg';
import tree4 from './img/tree4.svg';
import monkey1 from './img/monkey-plaster.png';
import monkey2 from './img/monkey-bandage.png';
import { HraciPole } from '../HraciPole';
import { Situace } from '../Situace';
import { situations } from '../databaze';
import { lives } from '../databaze';

import { useState, useEffect } from 'react';

export const Hra = () => {
  const [situation, setSituation] = useState({});
  const [showGamefield, setShowGamefield] = useState(true);

  const [lifebar, setLifebar] = useState(lives[0]);

  const [i, setI] = useState(1);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const [gameOver, setGameOver] = useState(false);

  const handleOnSelect = (id) => {
    const oneSituation = situations.filter((item) => item.id === Number(id));
    setSituation(oneSituation[0]);
    setShowGamefield(false);
  };

  const [shouldMonkeyMove, setShouldMonkeyMove] = useState(false);

  const [n, setN] = useState(1);


  const handleContinue = () => {
    isAnswerCorrect ? setShouldMonkeyMove(true) : null;
    isAnswerCorrect && n < 9 ? setN(n + 1) : null;
    isAnswerCorrect ? setShowGamefield(true) : setShowGamefield(false);
  };

  const handleOnAnswer = (isCorrect) => {
    isCorrect ? null : removeLife();
    setIsAnswerCorrect(isCorrect);
  };

  const navigate = useNavigate();

  const navigateVyhra = () => {
    navigate('/vyhra');
  };

  n === 9 ? setTimeout(navigateVyhra, 1500) : null;

  const removeLife = () => {
    setI(i + 1);
    if (i < lives.length - 1) {
      setLifebar(lives[i]);
    } else {
      setLifebar(lives[i]);
      setGameOver(true);
    }
  };

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (i < 3) {
      setPlayer(monkey);
    } else if (i >= 3 && i <= 4) {
      setPlayer(monkey1);
    } else {
      setPlayer(monkey2);
    }
  }, [i]);




  return (
    <>
      <div className="game_container">
        <nav className="game_navigation">
          <Link to="/">
            <img className="game_button" src={home} alt="domů" />
          </Link>{' '}
          <Link to="/pravidla">
            <img className="game_button" src={question} alt="pravidla" />{' '}
          </Link>
        </nav>
        <div className="lifebar">
          <img className="lifebar_monkey" src={player} alt="Opička" />
          {lifebar.map((item) => (
            <img src={item} className="lifebar_heart" />
          ))}
        </div>
      </div>
      <Outlet />
      <div className="game">
        <div className="gamefield">
          <div className="tree tree1">
            <img src={tree1} alt="Strom" />
          </div>
          <div className="tree tree2">
            <img src={tree2} alt="Strom" />
          </div>
          <div className="tree tree3">
            <img src={tree3} alt="Strom" />
          </div>
          <div className="tree tree4">
            <img src={tree4} alt="Strom" />
          </div>
          {showGamefield ? (
            <HraciPole
              onSelect={handleOnSelect}
              shouldMonkeyMove={shouldMonkeyMove}
              n={n}
              player={player}
            />
          ) : (
            <Situace
              onAnswer={handleOnAnswer}
              onContinue={handleContinue}
              key={situation.id}
              heading={situation.heading}
              image={situation.image}
              altText={situation.altText}
              answers={situation.answers}
              answerCorrect={situation.answerCorrect}
              gameOver={gameOver}
            />
          )}
        </div>
      </div>
    </>
  );
};
