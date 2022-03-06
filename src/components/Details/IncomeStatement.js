/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import styles from '../styles/Details.module.css';
import FormatNumber from '../FormatNumber';

const IncomeStatement = () => (
  <Container className={styles.marginCreate}>
    <Row
      className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
    >
      <Col style={{ overflow: 'auto' }}>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Year</th>
              <th>Financial Details</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.year}>2021 </div>
              </td>
              <td>
                <div className="d-flex">
                  <div>
                    Revenue:
                    {' '}
                    <FormatNumber number={136341000000} />
                  </div>
                  <div style={{ marginLeft: '2rem' }}>
                    Net Income:
                    <FormatNumber number={17937000000} />
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div>
                    Ratio:
                    {' '}
                    {0.131}
                  </div>
                  <div style={{ marginLeft: '2rem' }}>
                    eps:
                    {' '}
                    {4.483}
                  </div>
                  <div style={{ marginLeft: '2rem' }}>
                    epsdiluted:
                    {' '}
                    {4.437}
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div>Filling Date: 2022-02-04 </div>
                  <div style={{ marginLeft: '2rem' }}>Accepted Date: 2022-02-04 </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default IncomeStatement;
