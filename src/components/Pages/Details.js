import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails, fetchCompanyIncomeStatement } from '../../redux/stock/StockThunks';
import Profile from '../Details/Profile';
import Header from './Header';

const Details = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyDetails(param.id));
    dispatch(fetchCompanyIncomeStatement(param.id));
  }, [param]);
  return (
    <section className="pb-5">
      <Header type />
      <Profile />
    </section>
  );
};

export default Details;
