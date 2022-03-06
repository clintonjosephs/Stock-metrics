import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Dashboard.module.css';
import TopCompanies from './TopCompanies';

const Reports = () => {
  const topProfit = [
    {
      change: -0.75,
      changesPercentage: -4.26136,
      CompanyName: 'Ford Motor Company',
      price: 16.85,
      symbol: 'F',
    },
    {
      change: -3.06,
      changesPercentage: -1.8408215,
      CompanyName: 'Apple Inc.',
      price: 163.17,
      symbol: 'AAPL',
    },
    {
      change: -3.57,
      changesPercentage: -3.1880689,
      CompanyName: 'Advanced Micro Devices, Inc.',
      price: 108.41,
      symbol: 'AMD',
    },
  ];
  return (
    <Container className={styles.marginCreate}>
      <Row
        className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
      >
        <TopCompanies data={topProfit} />
        <Col
          md={5}
          sm={6}
          xs={12}
          style={{ background: 'transparent', padding: '1rem' }}
        >
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
              $2,128,022.00
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
                $3.99
              </span>
              <br />
              <span>
                <BsArrowDown color="red" className="blink" />
                $2.55
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reports;
