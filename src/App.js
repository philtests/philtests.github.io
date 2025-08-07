import './App.css';
import UnderConstruction from './components/UnderConstruction.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal"><Link class="navbar-brand no-underline text-white" to="/">PhilTests</Link></h5>
      </div>
      <Routes>
          <Route exact path="*" element={<UnderConstruction/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
