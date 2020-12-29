import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a onClick={() => setShowModal(true)}>Sign Up</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;