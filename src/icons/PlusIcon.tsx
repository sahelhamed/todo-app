// Node_modules
import React, { ReactElement, memo } from 'react';

interface Props {
  className?: string;
}

const PlusIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.779"
      height="19.779"
      viewBox="0 0 19.779 19.779"
      className={className}
    >
      <g className="a">
        <path
          className="b"
          d="M18.131,8.241H11.538V1.648a1.648,1.648,0,1,0-3.3,0V8.241H1.648a1.648,1.648,0,1,0,0,3.3H8.241v6.593a1.648,1.648,0,1,0,3.3,0V11.538h6.593a1.648,1.648,0,1,0,0-3.3Z"
        />
      </g>
    </svg>
  );
};

PlusIcon.defaultProps = {
  className: '',
};

export default memo(PlusIcon);
