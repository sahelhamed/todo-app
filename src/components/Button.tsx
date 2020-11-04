// Node_modules
import React, { ReactElement, memo } from 'react';
import cn from 'classnames';

interface Props {
  title?: string | number;
  onClick: () => void;
  className?: string;
  icon?: ReactElement;
}

const Button = ({ title, onClick, className, icon }: Props): ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        title !== '' ? 'bg-blue-500' : 'bg-transparent',
        'text-white border-none font-Roboto font-bold rounded-md px-5 py-3',
        className,
      )}
      onClick={onClick}
    >
      {icon && <span className={cn(title && 'mr-4')}>{icon}</span>}
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: '',
  className: '',
  icon: null,
};

export default memo(Button);
