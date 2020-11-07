// Node_modules
import React, { ReactElement, memo } from 'react';
import cn from 'classnames';

interface Props {
  title?: string | number;
  isActive?: boolean;
}

const Label = ({ title, isActive }: Props): ReactElement => {
  return (
    <span
      className={cn(
        isActive ? 'bg-orange-100' : 'bg-blue-600',
        'text-white rounded-3xl px-5 py-2 font-Roboto font-bold',
      )}
    >
      {title}
    </span>
  );
};

Label.defaultProps = {
  title: '',
  isActive: true,
};

export default memo(Label);
