import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import './style.css';

import next from './img/next.svg';
import back from './img/back.svg';
import correct from './img/correct.svg';
import wrong from './img/wrong.svg';
import hint from './img/hint.svg';
import dndPic from '../img/DnD_hint.gif';
import clickPic from '../img/onClick_hint.gif';

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
  answerCorrect,
  answers,
  onContinue,
  onAnswer,
  gameOver,
}) => {
  const [answerID, setAnswerID] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [openWindow, setOpenWindow] = useState(false);
  const [viewHint, setViewHint] = useState(false);

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

  const setHint = () => setViewHint(!viewHint);

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
              <p className="answers correct">{answerCorrect}</p>
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
            <div className="hint">
              <img
                onClick={setHint}
                className="hint_icon"
                src={hint}
                alt="Nápověda"
              />{' '}
              {viewHint ? (
                <>
                  <img
                    className="hint_class_desktop"
                    src={dndPic}
                    alt="jak vybrat ikonu na počítači"
                  />
                  <img
                    className="hint_class_mobile"
                    src={clickPic}
                    alt="jak vybrat ikonu na mobilu a tabletu"
                  />
                </>
              ) : null}
            </div>
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
