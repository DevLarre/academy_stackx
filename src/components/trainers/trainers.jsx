import React from 'react';
import './trainers.css';
import silva from '../../assets/silva.jpg';
import souza from '../../assets/souza.jpg';
import lima from '../../assets/lima.jpg';
import santos from '../../assets/santos.jpg';

const Trainers = () => {
  return (
    <div className="trainers">
      <div className="trainer-pair">
        <div className="trainer">
          <img src={silva} alt="Bodybuilding Teacher" />
          <p>João Silva - Musculação</p>
        </div>
        <div className="trainer">
        <img src={souza} alt="Teacher Aerobics" />
          <p>Maria Souza - Aeróbica</p>
        </div>
      </div>
      <div className="trainer-pair">
        <div className="trainer">
        <img src={lima} alt="Teacher Yoga" />
          <p>Pedro Lima - Yoga</p>
        </div>
        <div className="trainer">
        <img src={santos} alt="Teacher Pilates" />
          <p>Ana Santos - Pilates</p>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
