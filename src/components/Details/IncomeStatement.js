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
              <th>Date</th>
              <th>Revenue</th>
              <th>Financial Details</th>
              <th>Filling Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021-12-31</td>
              <td>
                <FormatNumber number={136341000000} />
              </td>
              <td>
                <div>
                  Net Income:
                  <FormatNumber number={17937000000} />
                </div>
                <div>
                  Ratio:
                  {0.131}
                </div>
                <div>
                  eps:
                  {4.483}
                </div>
                <div>
                  epsdiluted:
                  {4.437}
                </div>
              </td>
              <td>2022-02-04</td>
            </tr>
            <tr>
              <td>2021-12-31</td>
              <td>
                <FormatNumber number={136341000000} />
              </td>
              <td>
                <div>
                  Net Income:
                  <FormatNumber number={17937000000} />
                </div>
                <div>
                  Ratio:
                  {0.131}
                </div>
                <div>
                  eps:
                  {4.483}
                </div>
                <div>
                  epsdiluted:
                  {4.437}
                </div>
              </td>
              <td>2022-02-04</td>
            </tr>
            <tr>
              <td>2021-12-31</td>
              <td>
                <FormatNumber number={136341000000} />
              </td>
              <td>
                <div>
                  Net Income:
                  <FormatNumber number={17937000000} />
                </div>
                <div>
                  Ratio:
                  {0.131}
                </div>
                <div>
                  eps:
                  {4.483}
                </div>
                <div>
                  epsdiluted:
                  {4.437}
                </div>
              </td>
              <td>2022-02-04</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default IncomeStatement;
