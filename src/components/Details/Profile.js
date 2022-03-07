import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import FormatNumber from '../FormatNumber';
import styles from '../styles/Details.module.css';

const Profile = ({ details }) => {
  const {
    companyName, symbol, description, website, country, mktCap, image, ceo,
  } = details;
  return (
    <Container className={styles.marginCreate}>
      <Row
        className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
      >
        <Col xs={12} md={9}>
          <div>
            {' '}
            <span>Company name: </span>
            {' '}
&nbsp;
            {companyName}
          </div>
          <div>
            {' '}
            <span>Symbol: </span>
            {' '}
&nbsp;
            {symbol}
          </div>
          <div>
            {' '}
            <span>Description:</span>
            {' '}
            { `${description <= 120 ? description : `${`${String(description).substring(0, 120)}...click website to read more`}`} ` }
          </div>
          <div>
            {' '}
            <span>Web addr.: </span>
            {' '}
&nbsp;
            <a href={website} target="_blank" rel="noreferrer">{ website }</a>
          </div>
          <div>
            {' '}
            <span>Country: </span>
            {' '}
&nbsp;
            {country}
          </div>
          <div>
            <span>Market cap:</span>
            <FormatNumber number={mktCap} />
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={image} alt="company" className="rounded" style={{ maxWidth: '11rem' }} />
          <div>
            { ceo}
            , CEO
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Profile;
