//import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Tests from './components/Tests.js';
import UnderConstruction from './components/UnderConstruction.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal"><Link class="navbar-brand no-underline text-white" to="/">PhilTests</Link></h5>
        <nav class="my-2 my-md-0 mr-md-3">        
          <Link class="p-2 text-white" to="/tests">Tests</Link>
          <Link class="p-2 text-white" to="/oops">Categories</Link>
          <Link class="p-2 text-white" to="/oops">Authors</Link>
          <Link class="p-2 text-white" to="/oops">Newsroom</Link>
        </nav>
        <a class="btn btn-warning" href="/oops">Sign in</a>
      </div>
      <Routes>
          <Route exact path="/" element={<UnderConstruction/>} />
          <Route exact path="/tests" element={<UnderConstruction/>} />
          <Route exact path="/oops" element={<UnderConstruction/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
