// Node_modules
import React, { ReactElement } from 'react';
// Components
import Button from './Button';
// Constants
import { CANCEL, SUBMIT } from '../constants/text';

interface Props {
  title?: string | number;
  isOpen?: boolean;
  children: ReactElement;
  onSubmit: () => void;
  onClose: () => void;
}

const Modal = ({
  title,
  isOpen,
  children,
  onSubmit,
  onClose,
}: Props): ReactElement => {
  return isOpen ? (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-customGray-200 z-10">
      <div className="p-10 bg-white rounded-md">
        <div className="mb-5 font-bold font-Roboto text-xl">{title}</div>
        <form>{children}</form>
        <div className="flex flex-row justify-between mt-5">
          <Button onClick={onClose} title={CANCEL} />
          <Button onClick={onSubmit} title={SUBMIT} />
        </div>
      </div>
    </div>
  ) : (
    <span />
  );
};

Modal.defaultProps = {
  title: '',
  isOpen: false,
};

export default Modal;
