import React, { useState } from 'react';
import {
  InputGroup, FormControl, Button, Container,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterCompanies } from '../../redux/stock/StockActions';
import styles from '../styles/Dashboard.module.css';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    dispatch(filterCompanies(e.target.value));
  };

  return (
    <Container fluid>
      <InputGroup>
        <FormControl
          placeholder="Search Company"
          aria-label="Search Company"
          aria-describedby="basic-addon2"
          className={styles.formControl}
          onChange={handleSearch}
          value={searchVal}
          role="search"
        />
        <Button variant="outline-secondary" id="button-addon2" className={styles.formControl}>
          <BiSearchAlt2 />
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SearchForm;
