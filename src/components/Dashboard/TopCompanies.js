import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Dashboard.module.css';

const colors = ['#ff6b6c', '#6a98ef', '#fdac41'];
const TopCompanies = ({ data, redirect }) => (
  <>
    {data.map(
      ({
        change, changesPercentage, price, id, companyName,
      }, index) => (

        <Col
          role="feed"
          key={id}
          onClick={() => redirect(id)}
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
              <h6>{id}</h6>
            </span>
            <span>
              <BsArrowUp color="green" className="blink" />
              {changesPercentage}
            </span>
            <span>
              <BsArrowDown color="red" className="blink" />
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
              companyName.length <= 18
                ? companyName
                : `${companyName.substring(0, 18)}...`
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
  redirect: PropTypes.func.isRequired,
};

export default TopCompanies;
