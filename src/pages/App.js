import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../layouts/Header';
import Navigation from '../layouts/Navigation';
import Page from '../layouts/Page';
import Footer from '../layouts/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header className="header">
            <Header />
          </header>

          <div className="main-navbar">
            <Navigation />
          </div>

          <section className="page">
            <Page />
          </section>

          <footer>
            <Footer />
          </footer>
        </>
      </Router>

      // <>
      //   <header>
      //     <h1>React.js with router</h1>
      //   </header>

      //   <div className="main-navbar">
      //     <button className="main-navbar__hamburger">
      //       <span className="hamburger__item hamburger__item--first"></span>
      //       <span className="hamburger__item hamburger__item--second"></span>
      //       <span className="hamburger__item hamburger__item--third"></span>
      //       asdasd
      //     </button>
      //     <nav>
      //       <ul>
      //         <li><a href="">item</a></li>
      //       </ul>
      //       <ul>
      //         <li><a href="">item2</a></li>
      //       </ul>
      //       <ul>
      //         <li><a href="">item3</a></li>
      //       </ul>
      //       <ul>
      //         <li><a href="">item4</a></li>
      //       </ul>
      //     </nav>
      //   </div>

      //   <section className="page">
      //     ...treść strony
      //   </section>

      //   <footer>
      //     Footer
      //   </footer>
      // </>
    );
  }
}

export default App;
