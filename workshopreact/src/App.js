import logo from './img/logoPizza.png';
import Menu from './Menu'
import Contact from './Contact'
import Home from './Home'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <img src={logo} alt="Logo" style={{width:'75px'}}/>;
        <ul class="right hide-on-med-and-down">
          <li><Link to= "/Home">Home</Link></li>
          <li><Link to= "/Menu"> Menu</Link></li>
          <li><Link to= "/Contact"> Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
  <Switch>
    <Route exact path = "/Home" component = {Home} />
    <Route exact path = "/Contact" component = {Contact} />
    <Route exact path = "/Menu" component = {Menu} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
