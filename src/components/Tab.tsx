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
        isActive
          ? 'bg-white text-blue-500 border-b-0'
          : 'customGray-100 text-gray-500',
        'text-white border-solid border border-gray-300 font-Roboto font-bold rounded-t-md w-32 py-3 outline-none',
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
