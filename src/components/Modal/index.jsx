import React from 'react';
import { BG, Modal } from './styles';

const ModalComponent = ({ onClose }) => {
  return (
    <>
      <Modal />
      <BG onClick={onClose} />
    </>
  );
};

export default ModalComponent;
