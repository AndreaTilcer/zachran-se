import React from 'react';
import './style.css';
import Monkey from '../img/monkey.svg';
import Path from './img/cesta.png';
import { gamefieldIcons } from '../databaze';

export const HraciPole = ({ onSelect }) => {
  return (
    <>
      <div className="path">
        <img src={Path} alt="Cesta" />
      </div>
      {gamefieldIcons.map((item) => {
        return (
          <div className={item.classDiv} key={item.id}>
            <img
              id={item.id}
              className={item.classImg}
              src={item.image}
              alt={item.altText}
              onClick={(event) => onSelect(event.target.id)}
            />
          </div>
        );
      })}

      <div className="monkey" id="player">
        <img src={Monkey} alt="Hráč" />
      </div>
    </>
  );
};
