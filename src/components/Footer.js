import React, { Component } from "react";

export default class Footer extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="footerSection">
          <div className="container">
            <div className="row">
              <div className="span3">
                <h5>Perfil</h5>
                <a href="login.html">Seu Perfil</a>
                <a href="login.html">Informação Pessoal</a>
                <a href="login.html">Endereços</a>
                <a href="login.html">Histórico de Compras</a>
              </div>
              <div className="span3">
                <h5>INFORMAÇÕES</h5>
                <a href="contact.html">CONTATO</a>
                <a href="register.html">REGISTROS</a>
                <a href="legal_notice.html">INFORMAÇÕES LEGAIS</a>
                <a href="faq.html">FAQ</a>
              </div>
              <div className="span3">
                <h5>OFERTAS</h5>
                <a href="#">NOVOS PRODUTOS</a>
                <a href="special_offer.html">OFERTAS ESPECIAIS</a>
                <a href="#">FABRICANTES</a>
                <a href="#">FORNECEDORES</a>
              </div>
              <div id="socialMedia" className="span3 pull-right">
                <h5>REDES SOCIAIS</h5>
                <a href="#">
                  <img width="60" height="60" src="images/facebook.png" title="facebook" alt="facebook" />
                </a>
                <a href="#">
                  <img width="60" height="60" src="images/twitter.png" title="twitter" alt="twitter" />
                </a>
                <a href="#">
                  <img width="60" height="60" src="images/youtube.png" title="youtube" alt="youtube" />
                </a>
              </div>
            </div>
            <p className="pull-right">&copy; KungFighters</p>
          </div>
        </div>
    );
  }
}