import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashboard from './components/Pages/DashBoard';
import Details from './components/Pages/Details';
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
    <Route path="/details/:id" element={<Details />} />
  </Routes>
);

export default App;
