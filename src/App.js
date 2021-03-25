import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import MMForm from './pages/MMForm/MMForm';
import './App.css';

function App() {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
        <Route exact path='/' component={MMForm} />
    </Router>
  );
}

export default App;
