import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import styles from '../styles/Dashboard.module.css';

const CardList = ({ data }) => (
  <Container className={styles.marginCreate}>
    <Row className="mx-lg-5 mt-5">
      {
      data.map(({
        id, change, companyName, price, changesPercentage,
      }) => (
        <Card
          key={id}
          change={change}
          companyName={companyName}
          price={price}
          changesPercentage={changesPercentage}
          id={id}
        />
      ))
     }
    </Row>
  </Container>
);

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      change: PropTypes.number,
      companyName: PropTypes.string,
      price: PropTypes.number,
      changesPercentage: PropTypes.number,
    }),
  ).isRequired,
};

export default CardList;
