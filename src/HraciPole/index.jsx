import React from 'react';
import './style.css';
import Monkey from '../img/monkey.svg';
import Path from './img/cesta.png';
import lock from "./img/lock.svg"
import { gamefieldIcons } from '../databaze';
import { useEffect } from 'react';
import { useState } from 'react';

export const HraciPole = ({ onSelect, shouldMonkeyMove, n }) => {


  
  const moveMonkey = () => {
    document.querySelector("#player").classList.add(`monkey${n}`)
  }

  useEffect(() => {document.querySelector("#player").classList.add(`monkey${n-1}`)},[])

  useEffect(() => {shouldMonkeyMove? setTimeout(moveMonkey, 300) : null},[])

  return (
    <>
      <div className="path">
        <img src={Path} alt="Cesta" />
      </div>
      {gamefieldIcons.map((item) => {
        return (
          <div className={n < item.id ? item.classDiv : `${item.classDiv} ${item.classDiv}click`} key={item.id}>
            <img
              id={item.id}
              className={item.classImg}
              src={item.image}
              alt={item.altText}
              onClick={(event) => n === item.id? onSelect(event.target.id) : null}
            />
             {n < item.id ? <img src={lock} alt="Zámek" className='lock'/> : null}
          </div>
        );
      })}

      <div className="monkey1" id="player">
        <img src={Monkey} alt="Hráč" />
      </div>
    </>
  );
};
