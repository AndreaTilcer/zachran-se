import React from 'react';
import { useEffect } from 'react';

import './style.css';

import path from './img/cesta.png';
import lock from './img/lock.svg';
import liana from './img/liana.png';
import check from './img/accept.svg';

import { gamefieldIcons } from '../databaze';

export const HraciPole = ({ onSelect, shouldMonkeyMove, n, player }) => {
  const moveMonkey = () => {
    document
      .querySelector('#player')
      .classList.replace(`monkey${n - 1}`, `monkey${n}`);
  };

  useEffect(() => {
    document.querySelector('#player').classList.add(`monkey${n}`);
  }, []);

  useEffect(() => {
    shouldMonkeyMove ? setTimeout(moveMonkey, 300) : null;
  }, []);

  return (
    <>
      <div className="path">
        <img className="desktop_path" src={path} alt="Cesta" />
        <img className="resposive_path" src={liana} alt="Cesta" />
        {gamefieldIcons.map((item) => {
          return (
            <div
              className={
                n != item.id
                  ? item.classDiv
                  : `${item.classDiv} ${item.classDiv}click`
              }
              key={item.id}
            >
              <img
                id={item.id}
                className={item.classImg}
                src={item.image}
                alt={item.altText}
                onClick={(event) =>
                  n === item.id ? onSelect(event.target.id) : null
                }
              />
              {n < item.id ? (
                <img src={lock} alt="Zámek" className="lock_check_icon" />
              ) : null}
              {n > item.id ? (
                <img src={check} alt="Vyřešeno" className="lock_check_icon" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="monkey1" id="player">
        <img className="monkey_icon" src={player} alt="Hráč" />
      </div>
    </>
  );
};
