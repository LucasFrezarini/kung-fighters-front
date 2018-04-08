import React, { Component } from 'react';

import Header       from "./components/Header";
import Footer       from "./components/Footer";
import MainPage     from "./components/MainPage";

import './themes/bootshop/bootstrap.min.css';
import './themes/css/base.css'
import './themes/css/bootstrap-responsive.min.css';
import './themes/css/font-awesome.css';
import './themes/css/font-awesome-ie7.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>  
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
