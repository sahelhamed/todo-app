// Node_modules
import React, { ReactElement, memo } from 'react';

interface Props {
  title?: string | number;
  onClick: () => void;
  className?: string;
}

const Button = ({ title, onClick, className }: Props): ReactElement => {
  return (
    <button
      type="button"
      className={`${className} bg-blue-500 text-white rounded-md px-5 py-4`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: '',
  className: '',
};

export default memo(Button);
