import React from 'react';
import {
  InputGroup, FormControl, Button, Container,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from '../styles/Dashboard.module.css';

const SearchForm = () => (
  <Container fluid>
    <InputGroup>
      <FormControl
        placeholder="Search Company"
        aria-label="Search Company"
        aria-describedby="basic-addon2"
        className={styles.formControl}
      />
      <Button variant="outline-secondary" id="button-addon2" className={styles.formControl}>
        <BiSearchAlt2 />
      </Button>
    </InputGroup>
  </Container>
);

export default SearchForm;
