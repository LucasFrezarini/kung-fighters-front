import React, { Component } from 'react';

import Carousel     from "../components/Carousel";
import Sidebar      from "../components/Sidebar";
import MainProducts from "../components/MainProducts";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <div id="mainBody">
          <div className="container">
            <div className="row">
              <Sidebar/>
              <MainProducts/>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}