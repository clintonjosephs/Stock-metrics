import React from 'react';
import { Col } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Dashboard.module.css';

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
    <div className={`${styles.cardBody} d-flex flex-column align-items-start`}>
      <span className={styles.topCard}>
        <h6>AAPL</h6>
      </span>
      <span>
        <b>
          $106.31
        </b>
      </span>
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
);

export default Card;
