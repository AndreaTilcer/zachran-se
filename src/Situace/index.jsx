import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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
    const correctAnswer = answers.filter(
      (item) => item.id === Number(answerID),
    );

    setIsCorrect(correctAnswer[0].correct);
    setOpenWindow(true);
  };

  const gameButton = () => {
    onContinue();
    setOpenWindow(false);
  };

  return (
    <>
      <div className="situace_container">
        <h2 className="heading_2">{heading}</h2>
        {openWindow ? (
          <>
            <h3>{isCorrect ? 'Správná' : 'Špatná'} odpověď</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, dicta dolore minus placeat eum reprehenderit
              perspiciatis ea itaque minima aperiam inventore atque possimus.
              Deserunt officiis placeat fugiat saepe cumque accusamus?
            </p>
            <button onClick={gameButton}>
              {isCorrect ? 'Další otázka' : 'Zkus to znovu'}
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
