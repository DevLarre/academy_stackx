import React, { useState } from 'react';
import './classes.css';
import gym from '../../assets/gym.jpg';
import aerobica from '../../assets/aerobica.jpg';
import yoga from '../../assets/yoga.jpg';
import pilates from '../../assets/pilates.jpg';

const Classes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="classes">
      <div className="class-pair">
        <div className="class-item">
          <li>Musculação</li>
          <img className="jump" src={gym} alt="muscle" onClick={() => openModal(gym)} />
        </div>
        <div className="class-item">
          <li>Aeróbica</li>
          <img className="jump" src={aerobica} alt="aerobica" onClick={() => openModal(aerobica)} />
        </div>
      </div>
      <div className="class-pair">
        <div className="class-item">
          <li>Yoga</li>
          <img className="jump" src={yoga} alt="yoga" onClick={() => openModal(yoga)} />
        </div>
        <div className="class-item">
          <li>Pilates</li>
          <img className="jump" src={pilates} alt="pilates" onClick={() => openModal(pilates)} />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <img src={modalImage} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Classes;
