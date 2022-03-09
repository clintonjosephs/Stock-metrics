import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiFillAudio } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import styles from '../styles/Dashboard.module.css';

const Header = ({ type }) => {
  const navigate = useNavigate();
  const renderAgain = type;
  return (
    <div className={styles.header}>
      <Container fluid="md">
        <Row style={{ alignItems: `${!renderAgain ? 'center' : 'left'}`, margin: '5px' }}>
          { type && (
          <Col xs={2} md={1}>
            <AiOutlineArrowLeft onClick={() => navigate('/')} size={25} style={{ float: 'left', marginTop: '0.3rem', cursor: 'pointer' }} />
          </Col>
          )}
          <Col xs={6} md={`${!renderAgain ? 6 : 5}`}>
            <h4>{ `${!renderAgain ? 'Stock Metrics' : 'Company Details'}`}</h4>
          </Col>
          <Col xs={4} md={6}>
            <Row className={styles.arrangeRow}>
              <Col>
                <AiFillAudio />
              </Col>
              <Col>
                <IoMdSettings />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.bool.isRequired,
};

export default Header;
