import React, { Component } from "react";

export default class MainProducts extends Component {

  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="span9">
        <div className="well well-small">
          <h4>Produtos em destaque
            <small className="pull-right"> + Produtos em destaque</small>
          </h4>
          <div className="row-fluid">
            <div id="featured" className="carousel slide">
              <div className="carousel-inner">
                <div className="item active">
                  <ul className="thumbnails">
                    <li className="span3">
                      <div className="thumbnail">
                        <i className="tag"></i>
                        <a href="product_details.html">
                          <img src="images/products/b1.jpg" alt=""/>
                        </a>
                        <div className="caption">
                          <h5>Lança - Kwan Tao</h5>
                          <h4>
                            <a className="btn" href="product_details.html">VIEW</a>
                            <span className="pull-right">$180.00</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="span3">
                      <div className="thumbnail">
                        <i className="tag"></i>
                        <a href="product_details.html">
                          <img src="images/products/b2.jpg" alt=""/>
                        </a>
                        <div className="caption">
                          <h5>Punhal Duplo</h5>
                          <h4>
                            <a className="btn" href="product_details.html">VIEW</a>
                            <span className="pull-right">$80.00</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="span3">
                      <div className="thumbnail">
                        <i className="tag"></i>
                        <a href="product_details.html">
                          <img src="images/products/b3.jpg" alt=""/>
                        </a>
                        <div className="caption">
                          <h5> <br/> Facão Longo</h5>
                          <h4>
                            <a className="btn" href="product_details.html">VIEW</a>
                            <span className="pull-right">$210.00</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="span3">
                      <div className="thumbnail">
                        <i className="tag"></i>
                        <a href="product_details.html">
                          <img src="images/products/b4.jpg" alt=""/>
                        </a>
                        <div className="caption">
                          <h5>Manoplas de Combate</h5>
                          <h4>
                            <a className="btn" href="product_details.html">VIEW</a>
                            <span className="pull-right">$130.00</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
              <a className="left carousel-control" href="#featured" data-slide="prev">‹</a>
              <a className="right carousel-control" href="#featured" data-slide="next">›</a>
            </div>
          </div>
        </div>
        <h4>Novidades na loja </h4>
        <ul className="thumbnails">
          <li className="span3">
            <div className="thumbnail">
              <a href="product_details.html">
                <img src="images/products/6.jpg" alt="" />
              </a>
              <div className="caption">
                <h5><br/> <br/>Protetor Bucal</h5>
                <p>
                  Moldavel para máxima proteção
                </p>
                <h4 style={{textAlign:"center"}}>
                  <a className="btn" href="product_details.html">
                    <i className="icon-zoom-in"></i>
                  </a>
                  <a className="btn" href="#">Adicionar ao 
                    <i className="icon-shopping-cart"></i>
                  </a>
                  <a className="btn btn-primary" href="#">$20.00</a>
                </h4>
              </div>
            </div>
          </li>
          <li className="span3">
            <div className="thumbnail">
              <a href="product_details.html">
                <img src="images/products/7.jpg" alt="" />
              </a>
              <div className="caption">
                <h5><br/><br/><br/><br/><br/>Luvas de Treino</h5>
                <p>
                  Dedos Livres para melhorar conforto e precisão
                </p>
                <h4 style={{textAlign:"center"}}>
                  <a className="btn" href="product_details.html">
                    <i className="icon-zoom-in"></i>
                  </a>
                  <a className="btn" href="#">Adicionar ao 
                    <i className="icon-shopping-cart"></i>
                  </a>
                  <a className="btn btn-primary" href="#">$90.00</a>
                </h4>
              </div>
            </div>
          </li>
          <li className="span3">
            <div className="thumbnail">
              <a href="product_details.html">
                <img src="images/products/8.jpg" alt="" />
              </a>
              <div className="caption">
                <h5>Ataduras Jugui</h5>
                <p>
                  Maximizando a proteção durante os treinos
                </p>
                <h4 style={{textAlign:"center"}}>
                  <a className="btn" href="product_details.html">
                    <i className="icon-zoom-in"></i>
                  </a>
                  <a className="btn" href="#">Adicioar ao 
                    <i className="icon-shopping-cart"></i>
                  </a>
                  <a className="btn btn-primary" href="#">$45.00</a>
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}