import React from 'react';
import './home.css';
import time from "../../assets/time.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Bem-vindo à Academia Fitness</h1>
      <p>Seu corpo, seu tempo, seu lugar.</p>
      {/* Use a variável 'time' para referenciar a imagem */}
      <img src={time} alt="home" />
    </div>
  );
}

export default Home;
