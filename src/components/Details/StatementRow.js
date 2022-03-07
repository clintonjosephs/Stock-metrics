import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from '../FormatNumber';
import styles from '../styles/Details.module.css';

const StatementRow = ({ data }) => {
  const {
    revenue, netIncome, newIncomeRatio, eps, epsdiluted, fillingDate, acceptedDate, date,
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
        <div className="d-flex">
          <div>
            Revenue:
            {' '}
            <FormatNumber number={revenue} />
          </div>
          <div style={{ marginLeft: '2rem' }}>
            Net Income:
            <FormatNumber number={netIncome} />
          </div>
        </div>
        <div className="d-flex my-3">
          <div>
            Ratio:
            {`${Number(newIncomeRatio).toFixed(2)}`}
          </div>
          <div style={{ marginLeft: '2rem' }}>
            eps:
            {`${Number(eps).toFixed(2)}`}
          </div>
          <div style={{ marginLeft: '2rem' }}>
            epsdiluted:
            {`${Number(epsdiluted).toFixed(2)}`}
          </div>
        </div>
        <div className="d-flex my-3">
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
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default StatementRow;
