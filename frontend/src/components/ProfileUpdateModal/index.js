import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ProfileUpdateForm from './ProfileUpdateForm';

function ProfileUpdateModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a onClick={() => setShowModal(true)}>
        Update
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ProfileUpdateForm />
        </Modal>
      )}
    </>
  );
}

export default ProfileUpdateModal;