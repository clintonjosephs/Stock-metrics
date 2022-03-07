/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { getNumberSuffix } from '../utils/helpers';

const FormatNumber = ({ number }) => (
  <NumberFormat
    value={number}
    className="foo"
    displayType="text"
    thousandSeparator
    prefix="$"
    renderText={(value, props) => <div {...props}>{value}</div>}
    suffix={getNumberSuffix(number)}
  />
);

FormatNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default FormatNumber;
