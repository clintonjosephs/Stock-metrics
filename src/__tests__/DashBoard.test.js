import React from 'react';
import { Provider } from 'react-redux';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import Dashboard from '../components/Pages/DashBoard';

import MockData from '../__mocks__/MockMetrics';
import store from '../redux/store';
import { fetchStockMetrics } from '../redux/stock/StockThunks';

fetchMock.enableMocks();

let DashBoardProvider;
beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify(MockData));
  store.dispatch(fetchStockMetrics());
  DashBoardProvider = render(
    <Provider store={store}>
      <Router>
        <Dashboard />
      </Router>
    </Provider>,
  );
});

afterEach(() => {
  cleanup();
});

describe('Dashboard component', () => {
  it('Renders the nav component', async () => {
    const navbar = await DashBoardProvider.findByText('Stock Metrics');
    expect(navbar).toBeTruthy();
  });

  it('Renders the reports component', async () => {
    const reports = await DashBoardProvider.findByText('Daily Metrics Summary');
    expect(reports).toBeTruthy();

    const topCompanies = await DashBoardProvider.findAllByRole('feed');
    expect(topCompanies).toHaveLength(3);
  });

  it('Renders the cards for company listings', async () => {
    const cards = await DashBoardProvider.findAllByRole('img');
    expect(cards).toHaveLength(30);
  });

  it('Renders the search bar', async () => {
    const input = await DashBoardProvider.findByRole('search');
    expect(input).toBeInTheDocument();
  });

  it('Filters the list of cards on value change', async () => {
    const input = await DashBoardProvider.findByRole('search');
    fireEvent.change(input, { target: { value: 'apple' } });
    let cards = await DashBoardProvider.findAllByRole('img');
    expect(cards).toHaveLength(1);

    fireEvent.change(input, { target: { value: 'f' } });
    cards = await DashBoardProvider.findAllByRole('img');
    expect(cards).toHaveLength(8);
  });
});
