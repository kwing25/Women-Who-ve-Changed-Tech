import React from 'react';

import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainContent from "./pages/Main";
import About from "./pages/About";

import ReactPageScroller from 'react-page-scroller';

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
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Nav />
          <Home />
          <MainContent />
          <About />
        </ReactPageScroller>

      </React.Fragment>
    );
  }
}