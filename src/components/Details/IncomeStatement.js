import React from 'react';
import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../styles/Details.module.css';
import StatementRow from './StatementRow';

const IncomeStatement = ({ statement }) => (
  <Container className={styles.marginCreate}>
    <Row
      className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
    >
      <Col style={{ overflow: 'auto' }}>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Report year</th>
              <th>Income Statement</th>
            </tr>
          </thead>
          <tbody>
            { statement.map((data) => <StatementRow key={data.date} data={data} />)}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

IncomeStatement.propTypes = {
  statement: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default IncomeStatement;
