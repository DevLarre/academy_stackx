import React from 'react';
import './about.css';
import gymAcademy from '../../assets/gymAcademi.jpg';

const About = () => {
  return (
    <div className="about">
      <h1>Sobre Nós</h1>
      <p>Na Academia Fitness, acreditamos que a saúde e o bem-estar são fundamentais. <br></br>Oferecemos uma ampla gama de aulas e serviços para ajudar você a alcançar seus objetivos.</p>
      <img src={gymAcademy} alt="Image From Academy" />
    </div>
  );
}

export default About;
