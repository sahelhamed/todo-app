// Node_modules
import React, { ReactElement, memo } from 'react';

interface Props {
  className?: string;
}

const EditIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.517"
      height="20.517"
      viewBox="0 0 20.517 20.517"
      className={className}
    >
      <path
        className="a"
        d="M19.976,5.767,18.128,7.614a.481.481,0,0,1-.681,0L13,3.166a.481.481,0,0,1,0-.681L14.846.637a1.928,1.928,0,0,1,2.721,0l2.408,2.408A1.92,1.92,0,0,1,19.976,5.767Zm-8.564-1.7L.888,14.595l-.85,4.869a.963.963,0,0,0,1.114,1.114l4.869-.854L16.545,9.2a.481.481,0,0,0,0-.681L12.1,4.071a.486.486,0,0,0-.685,0ZM3.549,17.064H5.473v1.455l-2.585.453L1.642,17.725l.453-2.585H3.549Z"
        transform="translate(-0.024 -0.075)"
      />
    </svg>
  );
};

EditIcon.defaultProps = {
  className: '',
};

export default memo(EditIcon);
