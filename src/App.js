import React, { Component } from 'react';

import './themes/bootshop/bootstrap.min.css';
import './themes/css/base.css'
import './themes/css/bootstrap-responsive.min.css';
import './themes/css/font-awesome.css';
import './themes/css/font-awesome-ie7.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header"> {/* Início Header */}
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
                <a className="brand" href="index.html">
                  <img src="images/logo.png" alt="Bootsshop" />
                </a>
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
                    <a href="cadastroProduto.html">Cadastro</a>
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
        </div> {/* Fim Header */}
        <div id="carouselBlk"> {/* Começo Carousel*/}
          <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="item active">
                <div className="container">
                  <a href="register.html">
                    <img style={{width: "100%"}} src="images/carousel/1.png" alt="special offers" />
                  </a>
                  <div className="carousel-caption">
                    <h4>First Thumbnail label</h4>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam
                      id dolor id nibh ultricies vehicula ut id elit.</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <a href="register.html">
                    <img style={{width: "100%"}} src="images/carousel/2.png" alt="" />
                  </a>
                  <div className="carousel-caption">
                    <h4>Second Thumbnail label</h4>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam
                      id dolor id nibh ultricies vehicula ut id elit.</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <a href="register.html">
                    <img src="images/carousel/3.png" alt="" />
                  </a>
                  <div className="carousel-caption">
                    <h4>Third Thumbnail label</h4>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam
                      id dolor id nibh ultricies vehicula ut id elit.</p>
                  </div>

                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
          </div>
        </div> {/* Fim Carousel*/}

        <div id="mainBody">
          <div className="container">
            <div className="row">
              {/* Sidebar ================================================== */}
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
              {/*<!-- Sidebar end=============================================== -->*/}
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
            </div>
          </div>  
        </div>

        {/* <!-- Footer ================================================================== --> */}
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
          {/* <!-- Container End --> */}
        </div>
      </div>
    );
  }
}

export default App;
