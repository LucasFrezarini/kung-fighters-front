import React, { Component } from "react";
import { Link } from "react-router";

export default class Header extends Component {
  
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return(
      <div id="header">
          <div className="container">
            <div id="welcomeLine" className="row">
              <div className="span6">Bem Vindo
                <strong> Usuario</strong>
              </div>
              <div className="span6">
                <div className="pull-right">
                  <a href="product_summary.html">
                    <span className="btn btn-mini btn-primary">
                      <i className="icon-shopping-cart icon-white"></i> [ X ] Items no Carrinho </span>
                  </a>
                </div>
              </div>
            </div>
            <div id="logoArea" className="navbar">
              <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                <span className="icon-bar"></span>
              </a>
              <div className="navbar-inner">
                <Link className="brand" to="/">
                  <img src="images/logo.png" alt="Kung Fighters" />
                </Link>
                <form className="form-inline navbar-search" method="post" action="products.html">
                  <input id="srchFld" className="srchTxt" type="text" />
                  <select className="srchTxt">
                    <option>Tudo</option>
                    <option>Roupas</option>
                    <option>Armas</option>
                    <option>Equipamentos</option>
                  </select>
                  <button type="submit" id="submitButton" className="btn btn-primary">Buscar</button>
                </form>
                <ul id="topMenu" className="nav pull-right">
                  <li className="">
                    <a href="special_offer.html">Ofertas</a>
                  </li>
                  <li className="">
                    <Link to="/newProduct">Cadastro</Link>
                  </li>
                  <li className="">
                    <a href="contact.html">Contato</a>
                  </li>
                  <li className="">
                    <a href="#login" role="button" data-toggle="modal" style={{paddinRight:0}}>
                      <span className="btn btn-large btn-success">Entrar</span>
                    </a>
                    <div id="login" className="modal hide fade in" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="false">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
                        <h3>Entrar</h3>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal loginFrm">
                          <div className="control-group">
                            <input type="text" id="inputEmail" placeholder="Email"/>
                          </div>
                          <div className="control-group">
                            <input type="password" id="inputPassword" placeholder="Senha"/>
                          </div>
                          <div className="control-group">
                            <label className="checkbox">
                              <input type="checkbox"/> Lembrar de Mim
                            </label>
                          </div>
                        </form>
                        <button type="submit" className="btn btn-success">Entrar</button>
                        <button className="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
    );
  }
}