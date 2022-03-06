import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import styles from '../styles/Dashboard.module.css';

const CardList = () => (
  <Container className={styles.marginCreate}>
    <Row className="mx-lg-5 mt-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Row>
  </Container>
);

export default CardList;
