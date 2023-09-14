import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({ children }) => (
  <div className="Wrapper">{children}</div>
);

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;