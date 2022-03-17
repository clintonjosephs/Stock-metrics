import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { IoIosPaper } from 'react-icons/io';
import FormatNumber from '../FormatNumber';
import styles from '../styles/Details.module.css';
import ReportModal from '../ReportModal';

const Profile = ({ details, statement }) => {
  const {
    companyName, symbol, description, website, country, mktCap, image, ceo,
  } = details;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            { `${description <= 200 ? description : `${`${String(description).substring(0, 200)}...click website to read more`}`} ` }
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
        <Col xs={12} md={3} className="text-center">
          <img src={image} alt="company" className="rounded" style={{ maxWidth: '11rem' }} />
          <div>
            { `${String(ceo).length > 0 ? `${ceo}, CEO` : 'Ceo, not avail.'}`}
          </div>
          <Button variant="success" style={{ marginTop: '1rem' }} onClick={handleShow}>
            <IoIosPaper />
            {' '}
            Visual Report
          </Button>
        </Col>
      </Row>
      {show && <ReportModal show={show} onHide={handleClose} data={statement} />}
    </Container>
  );
};

Profile.propTypes = {
  details: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
  statement: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Profile;
