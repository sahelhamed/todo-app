// Node_modules
import React, { ReactElement, memo } from 'react';
import cn from 'classnames';
import { isEqual } from 'lodash';

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
        icon && 'flex items-center',
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

const areEqual = (prevProps: Props, nextProps: Props): boolean => {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return (
    isEqual(prevProps.title, nextProps.title) &&
    isEqual(prevProps.className, nextProps.className) &&
    isEqual(prevProps.onClick, nextProps.onClick)
  );
};

export default memo(Button, areEqual);
