// Node_modules
import React, { ReactElement, memo } from 'react';

export interface ButtonType {
  title?: string | number;
  onClick: () => void;
}

interface Props {
  buttons: ButtonType[];
  className?: string;
}

const GroupButtons = ({ buttons, className }: Props): ReactElement => {
  return (
    <div className={className}>
      {buttons.map((button) => (
        <button key={button.title} type="button" onClick={button.onClick}>
          {button.title}
        </button>
      ))}
    </div>
  );
};

GroupButtons.defaultProps = {
  className: '',
};

export default memo(GroupButtons);
