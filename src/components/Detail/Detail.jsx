import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Characters/Character.jsx';

const Detail = ({ name, url, status, gender, born, description }) => {
  return (
    <>
      <Character name={name} url={url} /> 
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
      <p>Date of Birth: {born}</p>
      <p>{description}</p>
    </>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  born: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Detail;
