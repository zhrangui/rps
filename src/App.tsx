import {BrowserRouter as Router, Route} from 'react-router-dom';
import Rps from './rps';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Rps} />
      <Route path="/about" component={Rps} />
    </Router>
  );
}

export default App;
