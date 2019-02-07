import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './header'
import ShowBook from './Showbook'
import Search from './Search'
import GetBooks from './GetBooks'
class App extends Component {
  state={
    bookToShow:{}
  }
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
          <div>
          <Header headline="Book Tracking App"/>
          <ShowBook heading="currentlyReading" heading2="wantToRead" heading3="read" />
          </div>
        )} />
        <Route  path="/search" render={()=>(
          <div>
            <Header headline="Get Books To Your Shelf Form here"/>
            <GetBooks/>
          </div>
        )} />
        </div>
        );
  }
}

export default App;
