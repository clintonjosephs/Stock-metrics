import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Reports from '../Dashboard/Report';
import CardList from '../Dashboard/CardList';
import {
  sumPrices, sumProfit, sumChanges, sortObj,
} from '../../utils/helpers';

const Dashboard = () => {
  const metrics = useSelector(
    (state) => state.metricsDataReducer.metrics,
  );

  const worker = useSelector(
    (state) => state.metricsDataReducer.dataWorker,
  );

  let sort = [];
  let top3 = [];

  if (metrics.length > 0) {
    sort = sortObj([...metrics]);
    top3 = [sort[0], sort[1], sort[2]];
  }

  return (
    <section className="pb-5">
      <Header type={false} />
      <Reports
        dailyTotal={sumPrices(metrics)}
        dailyProfit={sumProfit(metrics)}
        dailyChanges={sumChanges(metrics)}
        data={top3}
      />
      <CardList data={worker} />
    </section>
  );
};

export default Dashboard;
