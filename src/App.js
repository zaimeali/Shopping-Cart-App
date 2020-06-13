import React from 'react';

// Custom Styling
import './App.css';

// Bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Images
import love from './assets/logo/love.png';
import shopping from './assets/logo/shopping.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Shopping Cart <img className="App-title-image" src={ shopping } alt="Shopping Cart Logo" /></h2>
      </header>

      <main className="App-main">
      </main>

      <footer className="App-footer">
        <p>Made in <span className="App-footer-title">React</span> with <img className="App-footer-image" src={ love } alt="Heart Logo" /></p>
      </footer>
    </div>
  );
}

export default App;