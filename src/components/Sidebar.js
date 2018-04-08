import React, { Component } from "react";

export default class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar" className="span3">
        <ul id="sideManu" className="nav nav-tabs nav-stacked">
          <li className="subMenu open">
            <a> Roupas [x]</a>
            <ul>
              <li>
                <a className="active" href="products.html">
                  <i className="icon-chevron-right"></i>Yi-Fus</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Uniformes Tradicionais</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Trajes de Combate</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Faixas (15)</a>
              </li>
            </ul>
          </li>
          <li className="subMenu">
            <a> Armas [x] </a>
            <ul style={{display:"none"}}>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Bastões</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Lanças</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Armas Cortantes</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Armas Articuladas</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Banquinho do Jackie Chan</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Escada do Jackie Chan</a>
              </li>
            </ul>
          </li>
          <li className="subMenu">
            <a>Equipamentos [x]</a>
            <ul style={{display:"none"}}>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Luvas</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Ataduras</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Protetores</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Aparadores</a>
              </li>
              <li>
                <a href="products.html">
                  <i className="icon-chevron-right"></i>Sacos de Pancada</a>
              </li>
            </ul>
          </li>
        </ul>
        <br/>

        <div className="thumbnail">
          <img src="images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods"/>
          <div className="caption">
            <h5>Formas de Pagamento Disponíveis</h5>
          </div>
        </div>
      </div>
    );
  }
}