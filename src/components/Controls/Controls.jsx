import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown.jsx';

const Controls = ({ onSubmit, onSelect, buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <Dropdown onSelect={onSelect} />
    <button>{buttonText}</button>
  </form>
);

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default Controls;
