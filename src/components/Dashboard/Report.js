import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import FormatNumber from '../FormatNumber';
import styles from '../styles/Dashboard.module.css';
import TopCompanies from './TopCompanies';

const Reports = ({
  data, dailyTotal, dailyProfit, dailyChanges, navigate,
}) => (
  <Container className={styles.marginCreate}>
    <Row className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}>
      <TopCompanies data={data} redirect={navigate} />
      <Col md={5} sm={6} xs={12} style={{ background: 'transparent', padding: '1rem' }}>
        <div className="d-flex flex-column align-items-end">
          <h4 style={{ color: 'var(--neutral-color-2)' }}>
            Daily Metrics Summary
          </h4>
          <span
            style={{
              color: 'var(--neutral-color-1)',
              fontSize: '2rem',
              fontWeight: 'bolder',
            }}
          >
            {' '}
            <FormatNumber number={Number(dailyTotal)} />
            {' '}
          </span>
          <div
            style={{
              color: 'var(--neutral-color-2)',
              fontSize: '1.6rem',
              fontWeight: 'bolder',
            }}
          >
            <span>
              <BsArrowUp color="green" className="blink" />
              +
              {dailyProfit}
            </span>
            <br />
            <span>
              <BsArrowDown color="red" className="blink" />
              -
              {dailyChanges}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

Reports.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      change: PropTypes.number,
      companyName: PropTypes.string,
      price: PropTypes.number,
      changesPercentage: PropTypes.number,
    }),
  ).isRequired,
  dailyTotal: PropTypes.string.isRequired,
  dailyChanges: PropTypes.string.isRequired,
  dailyProfit: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Reports;
