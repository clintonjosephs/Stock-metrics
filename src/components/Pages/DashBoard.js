import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterCompanies, resetDetails } from '../../redux/stock/StockActions';
import Header from './Header';
import Reports from '../Dashboard/Report';
import CardList from '../Dashboard/CardList';
import {
  sumPrices, sumProfit, sumChanges, sortObj,
} from '../../utils/helpers';
import SkeletonLoader from '../SkeletonLoader';
import ErrorPage from '../ErrorPage';

const Dashboard = () => {
  const { metrics, dataWorker, error } = useSelector((state) => state.metricsDataReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = (id) => {
    dispatch(filterCompanies(''));
    dispatch(resetDetails());
    navigate(`/details/${id}`);
  };

  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  if (metrics.length === 0) {
    return (
      <>
        <SkeletonLoader sectionType={false} />
      </>
    );
  }

  let sort = [];
  let top3 = [];
  sort = sortObj([...metrics]);
  top3 = [sort[0], sort[1], sort[2]];

  return (
    <>
      <section className="pb-5">
        <Header type={false} />
        <Reports
          dailyTotal={sumPrices(metrics)}
          dailyProfit={sumProfit(metrics)}
          dailyChanges={sumChanges(metrics)}
          data={top3}
          navigate={navigateHandler}
        />
        <CardList data={dataWorker} navigate={navigateHandler} />
      </section>
    </>
  );
};

export default Dashboard;
