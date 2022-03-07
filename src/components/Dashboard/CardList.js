import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import styles from '../styles/Dashboard.module.css';
import SearchForm from './SearchForm';

const CardList = ({ data, navigate }) => (
  <Container className={styles.marginCreate}>
    <Row
      className="mx-lg-5 mt-5 p-0"
      style={{ background: 'white', boxShadow: '0 0 2px var(--neutral-color-2)' }}
    >
      <SearchForm />
    </Row>
    <Row className="mx-lg-5">
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
          redirect={navigate}
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
  navigate: PropTypes.func.isRequired,
};

export default CardList;
