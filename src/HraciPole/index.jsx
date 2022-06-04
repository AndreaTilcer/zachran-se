import React from 'react';
import '../style.css';
import './style.css';
import Monkey from '../img/monkey.svg';
import House from './img/house.svg';
import Storm from './img/storm.svg';
import Electricity from './img/electric-pole.svg';
import Accident from './img/accident.svg';
import River from './img/river.svg';
import Fireplace from './img/campfire.svg';
import Burnt from './img/wildfire.svg';
import Snow from './img/avalanche.svg';
import Path from './img/cesta.png';
import { Situace } from '../Situace';

export const HraciPole = () => {
  return (
    <>
      <div className="path">
        <img src={Path} alt="Cesta" />
      </div>
      <div className="house">
        <img
          src={House}
          alt="Vejít do chaty"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey1');
          }}
        />
      </div>
      <div className="storm">
        <img
          src={Storm}
          alt="Bouřka"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey2');
          }}
        />
      </div>
      <div className="electricity">
        <img
          src={Electricity}
          alt="Dráty vysokého napětí"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey3');
          }}
        />
      </div>
      <div className="accident">
        <img
          src={Accident}
          alt="Autonehoda"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey4');
          }}
        />
      </div>
      <div className="river">
        <img
          src={River}
          alt="Řeka"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey5');
          }}
        />
      </div>
      <div className="fireplace">
        <img
          src={Fireplace}
          alt="Ohniště"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey6');
          }}
        />
      </div>
      <div className="burnt">
        <img
          src={Burnt}
          alt="Hořící oděv"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey7');
          }}
        />
      </div>
      <div className="snow">
        <img
          src={Snow}
          alt="Lavina"
          onClick={() => {
            document.querySelector('#player').classList.add('monkey8');
          }}
        />
      </div>
      <div className="monkey" id="player">
        <img src={Monkey} alt="Hráč" />
      </div>
    </>
  );
};
