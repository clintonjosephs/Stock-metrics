import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Reports from '../Dashboard/Report';
import CardList from '../Dashboard/CardList';
import { sortObj } from '../../utils/helpers';

const Dashboard = () => {
  const activeCompanies = useSelector(
    (state) => state.metricsDataReducer.metrics,
  );

  let sort = [];
  let top3 = [];

  if (activeCompanies.length > 0) {
    sort = sortObj(activeCompanies);
    top3 = [sort[0], sort[1], sort[2]];
  }

  return (
    <section className="pb-5">
      <Header type={false} />
      <Reports
        data={top3}
      />
      <CardList data={activeCompanies} />
    </section>
  );
};

export default Dashboard;
