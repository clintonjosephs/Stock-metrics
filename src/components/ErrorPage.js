import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './styles/Dashboard.module.css';
import errorImg from '../images/nonetwork.png';

const ErrorPage = () => (
  <>
    <section className="pb-5">
      <Container className={styles.marginCreate}>
        <Row
          className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
          style={{ background: 'white', borderRadius: '20px' }}
        >
          <img src={errorImg} alt="network error" />
        </Row>
      </Container>
    </section>
  </>
);

export default ErrorPage;
