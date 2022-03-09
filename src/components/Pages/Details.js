import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../../redux/stock/StockThunks';
import IncomeStatement from '../Details/IncomeStatement';
import Profile from '../Details/Profile';
import Header from './Header';
import { formatDataForChart, formatDataForTable } from '../../utils/helpers';
import SkeletonLoader from '../SkeletonLoader';
import ErrorPage from '../ErrorPage';

const Details = () => {
  const { details, error, statement } = useSelector((state) => state.metricsDataReducer);
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyDetails(param.id));
  }, [param]);

  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  if (details.length === 0 || statement.length === 0) {
    return <SkeletonLoader sectionType />;
  }

  return (
    <section className="pb-5">
      <Header type />
      <Profile details={details[0]} statement={formatDataForChart(statement)} />
      <IncomeStatement statement={formatDataForTable(statement)} />
    </section>
  );
};

export default Details;
