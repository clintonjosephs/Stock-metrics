import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Dashboard from '../components/Pages/DashBoard';
import Details from '../components/Pages/Details';
import store from '../redux/store';

const DashboardProvider = () => (
  <Provider store={store}>
    <Router>
      <Dashboard />
    </Router>
  </Provider>
);

const DetailsProvider = () => (
  <Provider store={store}>
    <Router>
      <Details />
    </Router>
  </Provider>
);

describe('Check Main Components', () => {
  it('matches dashboard', () => {
    const component = renderer.create(<DashboardProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('matches details', () => {
    const component = renderer.create(<DetailsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
