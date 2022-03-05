import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillAudio } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import styles from '../../styles/Dashboard.module.css';

const Header = () => (
  <div className={styles.header}>
    <Container fluid="md">
      <Row>
        <Col>
          <h2>Stock Metrics</h2>
        </Col>
        <Col>
          <Row
            style={{
              float: 'right',
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              justifyItems: 'space-between',
            }}
          >
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

export default Header;
