//import './App.css';
import React from 'react';

import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainContent from "./pages/Main";
import About from "./pages/About";

import ReactPageScroller from 'react-page-scroller';



// export default function App() {
//   constructor(props) {
//     super(props);
//     this.state = { currentPage: null };
//   }

//   handlePageChange = number => {
//     this.setState({ currentPage: number });
//   };

//   handleBeforePageChange = number => {
//     console.log(number);
//   };

//   getPagesNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= 5; i++) {
//       pageNumbers.push(
//         <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
//           {i}
//         </Pager.Item>,
//       );
//     }

//     return [...pageNumbers];
//   };

//   render() {
//     const pagesNumbers = this.getPagesNumbers();


//   return (
//     <div className="App">
//       <React.Fragment>
//         <ReactPageScroller
//           pageOnChange={this.handlePageChange}
//           onBeforePageScroll={this.handleBeforePageChange}
//           customPageNumber={this.state.currentPage}
//         >
//       <Nav />
//       <Home />
//       <MainContent />
//       </ReactPageScroller>
//       </React.Fragment>
//     </div>
//   );
//   }
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Home />
//       <MainContent />
//     </div>
//   );
// }

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