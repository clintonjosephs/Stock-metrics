import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Dashboard.module.css';
import ChartImg from '../../images/chart-graph.png';

const Card = () => (
  <Col xs={6} sm={6} md={4} className={styles.card}>
    <div
      className={`${styles.cardTop} d-flex flex-row-reverse justify-content-between align-items-center`}
    >
      <BsArrowRightCircle />
      <span>
        <b>Ford Motor Company</b>
      </span>
    </div>
    <div
      className={`${styles.cardBody} d-flex flex-row align-items-start justify-content-between`}
    >
      <div className="d-flex flex-column align-items-start">
        <span className={styles.topCard}>
          <h6>AAPL</h6>
        </span>
        <span>
          <b>$106.31</b>
        </span>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <div className="d-flex flex-column">
                <span>
                  <BsArrowUp color="green" className={styles.blink} />
                  -1.8408215
                </span>
                <span>
                  <BsArrowDown color="red" className={styles.blink} />
                  -3.06
                </span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={ChartImg}
                alt="static-chart"
                className={styles.staticChart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </Col>
);

export default Card;
