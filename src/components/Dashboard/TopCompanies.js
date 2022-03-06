import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Dashboard.module.css';

const colors = ['#ff6b6c', '#6a98ef', '#fdac41'];
const TopCompanies = ({ data }) => (
  <>
    {data.map(
      ({
        change, changesPercentage, price, symbol, CompanyName,
      }, index) => (
        <Col
          key={symbol}
          md={2}
          sm={`${index === 0 ? 12 : 6}`}
          xs={`${index === 0 ? 12 : 6}`}
          className={`${styles.topReport} mx-md-1 my-2`}
          style={{
            backgroundColor: `${colors[index]}`,
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
            color: 'var(--neutral-color-1)',
            cursor: 'pointer',
          }}
        >
          <div className="d-flex flex-column align-items-end">
            <span className={styles.topSymbol}>
              <h6>{symbol}</h6>
            </span>
            <span>
              <BsArrowUp color="green" className={styles.blink} />
              {changesPercentage}
            </span>
            <span>
              <BsArrowDown color="red" className={styles.blink} />
              {change}
            </span>
            <span>
              <h4>
                $
                {price}
              </h4>
            </span>
          </div>
          <p className="text-center" style={{ marginTop: '2rem' }}>
            {`${
              CompanyName.length <= 18
                ? CompanyName
                : `${CompanyName.substring(0, 18)}...`
            }`}
          </p>
        </Col>
      ),
    )}
  </>
);

TopCompanies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      change: PropTypes.number,
      changesPercentage: PropTypes.number,
      price: PropTypes.number,
      symbol: PropTypes.string,
      CompanyName: PropTypes.string,
    }),
  ).isRequired,
};

export default TopCompanies;
