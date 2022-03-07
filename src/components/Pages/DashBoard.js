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

const Dashboard = () => {
  const metrics = useSelector((state) => state.metricsDataReducer.metrics);

  const worker = useSelector((state) => state.metricsDataReducer.dataWorker);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = (id) => {
    dispatch(filterCompanies(''));
    dispatch(resetDetails());
    navigate(`/details/${id}`);
  };

  if (metrics.length === 0) {
    return <SkeletonLoader sectionType={false} />;
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
        <CardList data={worker} navigate={navigateHandler} />
      </section>
    </>
  );
};

export default Dashboard;
