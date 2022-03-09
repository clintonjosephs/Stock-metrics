import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from '../styles/Dashboard.module.css';
import ChartImg from '../../images/chart-graph.png';

const Card = ({
  change, companyName, price, changesPercentage, id, redirect,
}) => (
  <Col xs={6} sm={6} md={4} className={styles.card} onClick={() => redirect(id)}>
    <div
      className={`${styles.cardTop} d-flex flex-row-reverse justify-content-between align-items-center`}
    >
      <BsArrowRightCircle />
      <span>
        <b>{companyName}</b>
      </span>
    </div>
    <div
      className={`${styles.cardBody} d-flex flex-row align-items-start justify-content-between`}
    >
      <div className="d-flex flex-column align-items-start">
        <span className={styles.topCard}>
          <h6>{id}</h6>
        </span>
        <span>
          <b>
            $
            {price}
          </b>
        </span>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <div className="d-flex flex-column">
                <span>
                  <BsArrowUp color="green" className="blink" />
                  {changesPercentage}
                </span>
                <span>
                  <BsArrowDown color="red" className="blink" />
                  {change}
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

Card.propTypes = {
  id: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  changesPercentage: PropTypes.number.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default Card;
