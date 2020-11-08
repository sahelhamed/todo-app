// Node_modules
import React, { ReactElement, memo } from 'react';
import cn from 'classnames';

interface Props {
  title?: string | number;
  onClick: () => void;
  className?: string;
  isActive?: boolean;
}

const Tab = ({ title, onClick, className, isActive }: Props): ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        isActive ? 'bg-white text-blue-500' : 'bg-gray-100 text-gray-400',
        'text-white border border-gray-100 font-Roboto font-bold rounded-md px-5 py-3 outline-none',
        className,
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Tab.defaultProps = {
  title: '',
  className: '',
  isActive: false,
};

export default memo(Tab);
