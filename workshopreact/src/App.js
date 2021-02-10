import logo from './img/logoPizza.png';

function App() {
  return (
    <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <img src={logo} alt="Logo" style={{width:'75px'}}/>;
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Menu</a></li>
          <li><a href="badges.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default App;
