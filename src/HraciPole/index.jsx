import React from 'react';
import './style.css';
import monkey from '../img/monkey.svg';
import path from './img/cesta.png';
import lock from './img/lock.svg';
import liana from './img/liana.svg';
import monkey1 from './img/monkey-plaster.png';
import monkey2 from './img/monkey-bandage.png';
import { gamefieldIcons } from '../databaze';
import { useEffect } from 'react';
import { useState } from 'react';

export const HraciPole = ({ onSelect, shouldMonkeyMove, n, i }) => {
  const moveMonkey = () => {
    document.querySelector('#player').classList.add(`monkey${n}`);
  };

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    document.querySelector('#player').classList.add(`monkey${n - 1}`);
  }, []);

  useEffect(() => {
    shouldMonkeyMove ? setTimeout(moveMonkey, 300) : null;
  }, []);

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
      <div className="path">
        <img src={path} alt="Cesta" />
        <img className="resposive_path" src={liana} alt="Cesta" />
      </div>
      {gamefieldIcons.map((item) => {
        return (
          <div
            className={
              n < item.id
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
              <img src={lock} alt="Zámek" className="lock" />
            ) : null}
          </div>
        );
      })}

      <div className="monkey1" id="player">
        <img src={player} alt="Hráč" />
      </div>
    </>
  );
};
