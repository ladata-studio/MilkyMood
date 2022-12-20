import React from 'react';
import { BG, CloseButton, Modal } from './styles';

const ModalComponent = ({ onClose }) => {
  return (
    <>
      <Modal>
        <CloseButton onClick={onClose} />
      </Modal>
      <BG onClick={onClose} />
    </>
  );
};

export default ModalComponent;
