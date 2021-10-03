import { Electronjs } from './components/Electron';
import { Reactjs } from './components/React';
import { BrowserRouter as Router, Route, NavLink , Switch  , Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="container">
             <div className="sidebar">
                <nav className="navbar">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="current-page">Electron</NavLink></li>
                        <li><NavLink exact to="/react" activeClassName="current-page">React</NavLink></li>
                    </ul>
                </nav>
        </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            {/* HOME */}
            <Electronjs />
          </Route>
          <Route exact path="/react">
            {/* " About " */}
            <Reactjs />
          </Route>
          <Redirect to="/" />
          </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
