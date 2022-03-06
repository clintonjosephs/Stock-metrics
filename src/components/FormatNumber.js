/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const FormatNumber = ({ number }) => (
  <NumberFormat
    value={number}
    className="foo"
    displayType="text"
    thousandSeparator
    prefix="$"
    renderText={(value, props) => <div {...props}>{value}</div>}
  />
);

FormatNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default FormatNumber;
