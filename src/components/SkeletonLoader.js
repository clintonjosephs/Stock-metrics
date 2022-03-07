import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from './Pages/Header';
import styles from './styles/Dashboard.module.css';

const SkeletonLoader = ({ sectionType }) => (
  <>
    <section className="pb-5">
      <Header type={sectionType} />
      <Container className={styles.marginCreate}>
        <Row
          className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
        >
          {' '}
          <SkeletonTheme baseColor="#272e48" highlightColor="#f8f9f9">
            <Skeleton count={5} />
          </SkeletonTheme>
        </Row>
      </Container>
    </section>
  </>
);

SkeletonLoader.propTypes = {
  sectionType: PropTypes.bool.isRequired,
};

export default SkeletonLoader;
