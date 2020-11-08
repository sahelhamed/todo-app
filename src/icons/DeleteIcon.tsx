// Node_modules
import React, { ReactElement, memo } from 'react';

interface Props {
  className?: string;
}

const DeleteIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      height="20.517px"
      width="20.517px"
      fill="#f64f71"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      className={`${className}text-lg`}
    >
      <rect width="126.4" height="15" transform="translate(10.60) rotate(45)" />
      <rect
        width="126.4"
        height="15"
        transform="translate(0 89.39) rotate(-45)"
      />
    </svg>
  );
};

DeleteIcon.defaultProps = {
  className: '',
};

export default memo(DeleteIcon);
