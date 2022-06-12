import React from "react";
import { useState, useEffect } from 'react';

import stars from "./img/stars.svg"
import star from "./img/star.svg"
import './style.css';


export const Results = () => {

const [monkeyImg, setMonkeyImg] = useState("")
const [starsFinal, setStarsFinal] = useState("")

useEffect(() => {
setMonkeyImg(localStorage.getItem('monkey'))
    }
  , []);

  useEffect(() => {
    setStarsFinal(localStorage.getItem('starCount'))
        }
      , []);

return (
  <div className="victory_container">
  <div className='victory_wrapper'>
  <h1 className="heading">ZACHRÁNIL/A SES!</h1>
  <div className='victory_info'>
  <div className="victory_picture">
    <img className="victory_monkey" src={monkeyImg} alt="opice" />
    <img className="victory_stars" src={stars} alt="hvězdy" />
  </div>
  <div>
    <div className="results_stars">Získal/a jsi:
    </div>
    <div className="results_stars">{starsFinal} /80 <img className="star_icon" src={star}/> </div>
  </div>
  </div>
  </div>
</div>

)
}