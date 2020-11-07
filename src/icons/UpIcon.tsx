// Node_modules
import React, { ReactElement, memo } from 'react';

interface Props {
  className?: string;
}

const UpIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      className={className}
    >
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

UpIcon.defaultProps = {
  className: '',
};

export default memo(UpIcon);
