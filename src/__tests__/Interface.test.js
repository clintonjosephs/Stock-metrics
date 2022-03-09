import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Dashboard from '../components/Pages/DashBoard';
import Details from '../components/Pages/Details';
import store from '../redux/store';

const DashboardProvider = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  </Provider>
);

const DetailsProvider = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
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
