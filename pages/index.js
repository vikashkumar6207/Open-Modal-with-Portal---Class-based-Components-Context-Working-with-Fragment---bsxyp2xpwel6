import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={modalIsOpen}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
