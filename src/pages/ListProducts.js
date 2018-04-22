import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Sidebar  from "../components/Sidebar";
import Api      from "../api/Api";
import Panel    from "../components/Panel";

export default class ListProducts extends Component {

  constructor() {
    super();
    this.state = {products: []}

  }

  componentWillMount() {
    fetch(`http://${Api.getBaseUrl()}/public/product`)
      .then(response => response.json())
      .then(products => this.setState({products: products}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Carousel/>
        <div id="mainBody">
          <div className="container">
            <div className="row">
              <Sidebar/>
              <ul className="thumbnails span9">
                {this.state.products.map(product => (
                  <Panel href="/" img={product.photos[0] ? `http://${Api.getBaseUrl()}${product.photos[0].url}` : "https://scontent.fcgh8-1.fna.fbcdn.net/v/t1.0-9/14600914_1429503647079262_7782924176407537284_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEgqc4Fymvc1CP0EpiQ2I2Ndo62GJuMnN5Rrx9FfXjlRngVXwd-QJ_PvdyQFedeXyXSVrYDuOdc_Lau9t-wWSqDkrHIUtGWQG4KLVrcNNFIig&oh=100a838edcdecb2262d03dc94f7b9686&oe=5B6BBC49"} name={product.name} price={product.price} key={product._id}/>
                ))}
              </ul>
            </div>
          </div>  
        </div>
      </div>
    )
  }
}