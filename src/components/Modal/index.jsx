import React from 'react';
import { BG, CloseButton, Modal } from './styles';

const ModalComponent = ({ onClose, children }) => {
  return (
    <>
      <Modal>
        <CloseButton onClick={onClose} />
        {children}
      </Modal>
      <BG onClick={onClose} />
    </>
  );
};

export default ModalComponent;
