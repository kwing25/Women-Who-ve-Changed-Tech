import React from 'react';

import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainContent from "./pages/Main";
import About from "./pages/About";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  render() {

    return (
      <React.Fragment>

          <Nav />
          <Home />
          <MainContent />
          <About />


      </React.Fragment>
    );
  }
}