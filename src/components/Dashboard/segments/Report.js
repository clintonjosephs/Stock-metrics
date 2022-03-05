import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Dashboard.module.css';

const Reports = () => (
  <Container fluid>
    <Row
      className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
    >
      <Col md={2} sm={12} className={`${styles.topReport} mx-md-1 my-2`}>
        lkdsaklds
      </Col>
      <Col md={2} sm={12} className={`${styles.topReport} mx-md-1 my-2`}>
        dsfsdfds
      </Col>
      <Col md={2} sm={12} className={`${styles.topReport} mx-md-1 my-2`}>
        asfdsfd
      </Col>
      <Col md={5} sm={12} style={{ background: 'var(--neutral-color-1)', padding: '1rem' }}>
        sdfds
      </Col>
    </Row>
  </Container>
);

export default Reports;
