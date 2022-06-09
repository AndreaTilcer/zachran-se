import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import next from './img/next.svg';
import back from './img/back.svg';
import correct from './img/correct.svg';
import wrong from './img/wrong.svg';

// import { useDrag } from 'react-dnd';

import './style.css';
import { situations } from '../databaze';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export const Situace = ({
  id,
  heading,
  image,
  altText,
  answers,
  onContinue,
  onAnswer,
  gameOver,
}) => {
  const [answerID, setAnswerID] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [openWindow, setOpenWindow] = useState(false);

  useDidMountEffect(() => {
    onAnswer(isCorrect);
  }, [isCorrect]);

  const drag = (ev) => {
    setAnswerID(ev.target.id);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    getResult(answerID);
  };

  const getIconID = (ev) => {
    getResult(ev.target.id);
  };

  const getResult = (iconID) => {
    const correctAnswer = answers.filter((item) => item.id === Number(iconID));

    setIsCorrect(correctAnswer[0].correct);
    setOpenWindow(true);
  };

  const navigate = useNavigate();

  const navigateProhra = () => {
    navigate('/prohra');
  };

  const gameButton = () => {
    if (gameOver) {
      navigateProhra();
    } else {
      onContinue();
      setOpenWindow(false);
    }
  };

  return (
    <>
      <div className="situace_container">
        <h2 className="heading_2">{heading}</h2>
        {openWindow ? (
          <>
            {isCorrect ? (
              <>
                <h3 className="heading_3">
                  <img
                    className="heading_icon"
                    src={correct}
                    alt="Správná odpověď"
                  />{' '}
                  Správná odpověď
                </h3>
              </>
            ) : (
              <>
                <h3 className="heading_3">
                  <img
                    className="heading_icon"
                    src={wrong}
                    alt="Špatná odpověď"
                  />{' '}
                  Špatná odpověď
                </h3>
              </>
            )}
            <div className="correct_answer_container">
              <img className="situace_2" key={id} src={image} alt={altText} />
              <p className="answers correct">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, dicta dolore minus placeat eum reprehenderit
                perspiciatis ea itaque minima aperiam inventore atque possimus.
                Deserunt officiis placeat fugiat saepe cumque accusamus?
              </p>
            </div>
            <button className="window_button" onClick={gameButton}>
              {isCorrect ? (
                <img src={next} alt="Další otázka" />
              ) : (
                <img src={back} alt="Zkus to znovu" />
              )}
            </button>
          </>
        ) : (
          <>
            <img
              onDrop={(ev) => drop(ev)}
              onDragOver={(ev) => allowDrop(ev)}
              className="situace_1"
              key={id}
              src={image}
              alt={altText}
            />
            <div className="answers">
              {answers.map((item) => {
                return (
                  <div className="icon_container">
                    <img
                      draggable="true"
                      onClick={(ev) => getIconID(ev)}
                      onDragStart={(ev) => drag(ev)}
                      className="ikona_1"
                      key={item.id}
                      id={item.id}
                      src={item.icon}
                      alt={item.iconAlt}
                    />
                    <p>{item.answer}</p>
                  </div>
                );
              })}
            </div>{' '}
          </>
        )}
      </div>
    </>
  );
};
