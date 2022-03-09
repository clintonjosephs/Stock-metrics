import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Pages/Details';

import MockDetails from '../__mocks__/MockDetails';

fetchMock.enableMocks();
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    metrics: [],
    details: [...MockDetails.details],
    statement: [...MockDetails.statement],
    dataWorker: [],
    error: false,
  }),
  useDispatch: () => mockDispatch,
}));

let DetailsProvider;
beforeEach(() => {
  DetailsProvider = render(
    <Router>
      <Details />
    </Router>,
  );
});

afterEach(() => {
  cleanup();
});

describe('Details component', () => {
  it('Renders the nav component', async () => {
    const navbar = await DetailsProvider.findByText('Company Details');
    expect(navbar).toBeTruthy();
  });

  it('Renders the profile page', async () => {
    const image = await DetailsProvider.findByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('Company details is rendered', async () => {
    const companyDetails = await DetailsProvider.findByText(
      'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iP...click website to read more',
    );
    expect(companyDetails).toBeInTheDocument();
  });

  test('Income Statement button exists and opens modal when clicked', async () => {
    const visualizeButton = await DetailsProvider.findByRole('button');
    expect(visualizeButton).toBeInTheDocument();

    fireEvent.click(visualizeButton);
    const modal = await DetailsProvider.findByRole('dialog');
    expect(modal).toBeVisible();
  });

  test('Income statement table is rendered', async () => {
    const table = await DetailsProvider.findAllByRole('row');
    expect(table).toHaveLength(6);
  });
});
