import React, { Component } from "react";

export default class NewProduct extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div id="mainBody">
          <div className="container">
            <div className="row">
              <div className="span9" id="mainCol">
                <ul className="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                        <span className="divider">/</span>
                    </li>
                    <li className="active">Cadastro de Produtos</li>
                </ul>
                <h3> Cadastro de Produtos</h3>
                <hr className="soft" />

                <form>
                    <div className="form-group">
                        <label htmlFor="CodigoProduto">Código do Produto</label>
                        <input type="Text" className="form-control" id="CodigoProduto" placeholder="Código do Produto"/>
                        <small id="emailHelp" className="form-text text-muted">Este código não será visivel ao usuário</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="NomeProduto">Nome Produto</label>
                        <input type="Text" className="form-control" id="NomeProduto" placeholder="Nome do Produto"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CategoriaProduto">Categoria do Produto</label>
                        <select className="form-control" id="CategoriaProduto">
                            <option>Roupas</option>
                            <option> --Yi-Fus</option>
                            <option> --Uniformes Tradicionais</option>
                            <option> --Trajes de Combate</option>
                            <option> --Faixas</option>
                            <option>Armas</option>
                            <option> --Bastões</option>
                            <option> --Lanças</option>
                            <option> --Armas Cortantes</option>
                            <option> --Armas Articuladas</option>
                            <option> --Jackie Chan</option>
                            <option>Equipamentos</option>
                            <option> --Luvas</option>
                            <option> --Ataduras</option>
                            <option> --Protetores</option>
                            <option> --Aparadores</option>
                            <option> --Sacos de Pancada</option>
                        </select>
                    </div>
                    <div className="form-group">
                        {/* <!--(preço) --> */}
                        <label htmlFor="ModeloProduto">Modelo do Produto</label>
                        <input type="Text" className="form-control" id="ModeloProduto" placeholder="Modelo do Produto"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ValorProduto">Valor do Produto</label>
                        <input type="email" className="form-control" id="ValorProduto" placeholder="R$12.34"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="FotoProduto">Foto do Produto</label>
                        <input type="file" className="form-control-file" id="FotoProduto"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="DescricaoProduto">Descrição do Produto</label>
                        <textarea className="form-control" id="DescricaoProduto" rows="4"></textarea>
                    </div>
                  <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}