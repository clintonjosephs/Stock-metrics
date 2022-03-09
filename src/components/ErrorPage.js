import React from 'react';
import { useNavigate } from 'react-router';
import {
  Container, Row,
} from 'react-bootstrap';
import styles from './styles/Dashboard.module.css';
import errorImg from '../images/nonetwork.png';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-5">
        <Container className={styles.marginCreate} onClick={() => { navigate('/'); window.location.reload(); }}>
          <Row
            className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
            style={{ background: 'white', borderRadius: '20px', cursor: 'pointer' }}
          >
            <img src={errorImg} alt="network error" />
            {' '}
            <h3 className="text-center">Tap to refresh</h3>
          </Row>

        </Container>
      </section>
    </>
  );
};

export default ErrorPage;
