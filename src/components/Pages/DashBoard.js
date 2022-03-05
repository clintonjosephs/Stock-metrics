import React from 'react';
import Header from '../Dashboard/Header';
import Reports from '../Dashboard/Report';
import CardList from '../Dashboard/CardList';

const Dashboard = () => (
  <section className="pb-5">
    <Header />
    <Reports />
    <CardList />
  </section>
);

export default Dashboard;
