import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
// import { useDrag } from 'react-dnd';

import './style.css';

export const Situace = ({ heading, image, altText, answers }) => {
  return (
    <>
      <div className="situace_container">
        <h2 className="heading_2">{heading}</h2>
        <img className="situace_1" src={image} alt={altText} />
        <div className="answers">
          {answers.map((item) => {
            return (
              <div className="icon_container">
                <img className="ikona_1" src={item.icon} alt={item.iconAlt} />
                <p>{item.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
