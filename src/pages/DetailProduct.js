import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Sidebar  from "../components/Sidebar";
import Api      from "../api/Api";
import Panel    from "../components/Panel";

export default class DetailProduct extends Component {

  constructor() {
    super();
    this.state = {products: []}

  }

  componentWillMount() {
    fetch(`http://${Api.getBaseUrl()}/public/product`)
      .then(response => response.json())
      .then(json => this.setState({products: json.products}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Carousel/>
        <div id="mainBody">
          <div className="container">
            <div className="row">
              <div class="span4">
                <img src="https://img1.ibxk.com.br/2017/07/13/13160112901226.jpg?w=700"/>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )
  }
}