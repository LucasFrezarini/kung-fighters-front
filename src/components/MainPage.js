import React, { Component } from 'react';

import Carousel     from "./Carousel";
import Sidebar      from "./Sidebar";
import MainProducts from "./MainProducts";

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