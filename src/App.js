import React from 'react';

// Custom Styling
import './App.css';

// Bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Images
import love from './assets/logo/love.png';
import shopping from './assets/logo/shopping.png';

// Routes
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

// API
// import { MobileConsumer } from './api/ContextAPI';

// Components
import MobileList from './components/MobileList/MobileList';  

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Link to="/"><h2 className="App-title">Shopping Cart <img className="App-title-image" src={ shopping } alt="Shopping Cart Logo" /></h2></Link>

        <Link className="App-title-link" to="/cart">My Cart</Link>
      </header>

      <main className="App-main">
        <Route path="/" component={ MobileList } />
        <Switch>
          <Route exact path="/" component={ MobileList } />
        </Switch>
      </main>

      <footer className="App-footer">
        <p>Made in <span className="App-footer-title">React</span> with <img className="App-footer-image" src={ love } alt="Heart Logo" /></p>
      </footer>
    </Router>
  );
}

export default App;