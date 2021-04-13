import React from 'react';
import { Container, Nav, NavbarBrand, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Christian France",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Welcome!",
        subTitle: "Constantly learning",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      },
      resume: {
        title: "My resume"
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className="p-0 bg-hp" fluid={true}>
          
          <Navbar className="border-bottom bg-header" expand="lg">
            <NavbarBrand>Christian France</NavbarBrand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </NavbarCollapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/Portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>} />

          <Footer />

        </Container>
      </Router>
    );
  }
  
}

export default App;
