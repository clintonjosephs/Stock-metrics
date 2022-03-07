import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../../redux/stock/StockThunks';
import IncomeStatement from '../Details/IncomeStatement';
import Profile from '../Details/Profile';
import Header from './Header';

const Details = () => {
  const details = useSelector(
    (state) => state.metricsDataReducer.details,
  );

  const statement = useSelector(
    (state) => state.metricsDataReducer.statement,
  );

  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('using effect');
    dispatch(fetchCompanyDetails(param.id));
  }, [param]);

  if (details.length > 0) {
    return (
      <section className="pb-5">
        <Header type />
        <Profile details={details[0]} />
        <IncomeStatement statement={statement} />
      </section>
    );
  }
  return <h1>No data found</h1>;
};

export default Details;
