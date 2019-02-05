import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getAll} from './bookAPI'
import Header from './header'
import ShowBook from './Showbook'
class App extends Component {
  state={
    currentlyReading:{},
    wantToRead:{},
    read:{}
  }
  componentWillMount()
  {
    getAll().then((data)=>{
      this.setState({
        currentlyReading:data.filter(e=>e.shelf==='currentlyReading'),
        wantToRead:data.filter(e=>e.shelf==='wantToRead'),
        read:data.filter(e=>e.shelf==='read')
      })
      console.log(data)
    })
  }
  render() {
    return (
      <div>
      <Header/>
      <ShowBook heading="currentlyReading" books={this.state.currentlyReading}/>
      <ShowBook heading="wantToRead" books={this.state.wantToRead}/>
      <ShowBook heading="read" books={this.state.read}/>
      </div>
    );
  }
}

export default App;
