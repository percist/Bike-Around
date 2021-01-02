import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';

function DemoSignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [isDemo, setIsDemo] = useState(false)

  return (
    <>
      <a 
        id="link-demo"
        onClick={() => {
          setIsDemo(true);
          setShowModal(true);
          }}
      >
        Demo
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default DemoSignupFormModal;