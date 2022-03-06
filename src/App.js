import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashboard from './components/Pages/DashBoard';
import IncomeStatement from './components/Details/IncomeStatement';
import './App.css';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <Container fluid className="App">
          <Dashboard />
          {' '}
        </Container>
      )}
    />
    <Route path="/details/:id" element={<IncomeStatement />} />
  </Routes>
);

export default App;
