import React, { Component } from "react";
import { Link } from "react-router";
import "./Panel.css";

export default class Header extends Component {
  
  constructor() {
    super();
  }
  
  render() {
    return(
      <li className="span3">
        <div className="thumbnail panel">
          <a href={this.props.href}>
            <img src={this.props.img} alt={this.props.imgAlt} />
          </a>
          <div className="caption">
            <h5><br/> <br/>{this.props.name}</h5>
            <p>
              {this.props.description}
            </p>
            <h4 style={{textAlign:"center"}}>
              <a className="btn" href={this.props.href}>
                <i className="icon-zoom-in"></i>
              </a>
              <a className="btn" href="#">Adicionar ao 
                <i className="icon-shopping-cart"></i>
              </a>
              <a className="btn btn-primary" href={this.props.href}>R$ {this.props.price}</a>
            </h4>
          </div>
        </div>
      </li>
    );
  }
}