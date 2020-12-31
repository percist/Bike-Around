import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';

function DemoSignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [isDemo, setIsDemo] = useState(false)

  return (
    <>
      <a 
        id="demo-button"
        onClick={() => {
          setIsDemo(true);
          setShowModal(true);
          }}
      >
        Demo
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default DemoSignupFormModal;