// Node_modules
import React, { ReactText } from 'react';
// import PropTypes from 'prop-types';

interface Props {
  title: string | ReactText;
  isActive: boolean;
}

const Label: React.FC<Props> = ({ title, isActive }) => {
  return (
    <span
      className={`${
        isActive ? 'bg-orange-400' : 'bg-blue-600'
      } text-white rounded-3xl px-5 py-2 font-Roboto font-bold`}
    >
      {title}
    </span>
  );
};

Label.propTypes = {
  /*
  title: PropTypes.string,
  isActive: PropTypes.bool,
     */
};

Label.defaultProps = {
  title: '',
  isActive: true,
};

export default Label;
