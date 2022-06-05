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

export const Situace = ({ heading, image, altText, answers }) => {
  const [answerID, setAnswerID] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useDidMountEffect(() => {
    console.log('second render');
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
    isCorrect ? console.log('Pouč se') : null;
    console.log(isCorrect);
    console.log(correctAnswer[0].correct);
  };

  return (
    <>
      <div className="situace_container">
        <h2 className="heading_2">{heading}</h2>
        {isCorrect ? (
          <>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus, dicta dolore minus placeat eum reprehenderit
              perspiciatis ea itaque minima aperiam inventore atque possimus.
              Deserunt officiis placeat fugiat saepe cumque accusamus?
            </p>
            <button>Dále</button>
          </>
        ) : (
          <>
            <img
              onDrop={(ev) => drop(ev)}
              onDragOver={(ev) => allowDrop(ev)}
              className="situace_1"
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
