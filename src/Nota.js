import React from 'react';
import notaData from './data/dadosNota.json';

const Nota = () => {
  return (
    <div className="componenteNota">
      <div className="content">
        <div className="left">
          <h2>{notaData.title}</h2>
          <h3>{notaData.rating}</h3>
          <div className="stars">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
        <div className="right">
          <div className="rank-stars">
            {notaData.starCount.map((item, index) => (
              <div className="container-flex" key={index}>
                <span>{item.stars}</span>
                <span className="material-symbols-outlined">star</span>
                <input
                  disabled
                  type="range"
                  min="0"
                  max="5"
                  step="1"
                  defaultValue={item.defaultValue}
                  className="star-range"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nota;
