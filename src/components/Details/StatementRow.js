import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import FormatNumber from '../FormatNumber';
import styles from '../styles/Details.module.css';

const StatementRow = ({ data }) => {
  const {
    revenue, netIncome, reportedCurrency, eps, ebitdaratio, fillingDate, acceptedDate, date,
  } = data;
  const breakDate = String(date).split('-');
  return (
    <tr>
      <td>
        <div className={styles.year}>
          {' '}
          {breakDate[0]}
          {' '}
        </div>
      </td>
      <td>
        <div className={`${styles.tableContent} d-flex`}>
          <div>
            Revenue:
            {' '}
            <FormatNumber number={revenue} currency={reportedCurrency} />
          </div>
          <div style={{ marginLeft: '2rem' }}>
            Net Income:
            <FormatNumber number={netIncome} currency={reportedCurrency} />
          </div>
        </div>
        <div className={`${styles.tableContent} d-flex my-3`}>
          <div>
            Reported currency: &nbsp;
            {reportedCurrency}
          </div>
          <div style={{ marginLeft: '2rem' }}>
            <BsArrowUp color="green" />
            {`${Number(eps).toFixed(2)}`}
          </div>
          <div style={{ marginLeft: '2rem' }}>
            <BsArrowDown color="red" />
            {`${Number(ebitdaratio).toFixed(2)}`}
          </div>
        </div>
        <div className={`${styles.tableContent} d-flex my-3`}>
          <div>
            Filling Date: &nbsp;
            {fillingDate}
          </div>
          <div style={{ marginLeft: '2rem' }}>
            Accepted Date: &nbsp;
            {acceptedDate}
          </div>
        </div>
      </td>
    </tr>
  );
};

StatementRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
};

export default StatementRow;
