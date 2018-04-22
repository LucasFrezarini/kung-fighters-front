import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Api     from "../api/Api";

export default class NewProduct extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      category: {
        name: "roupas"
      },
      photos: [{
        title: "",
        url: ""
      }],
      model: "",
      price: "",
      description: "",
      message: ""
    }

    this.create = this.create.bind(this);
  }

  changeState(inputName, event) {
    let changed         = {};
    changed[inputName]  = event.target.value;
    this.setState(changed); 
  }

  changeCategory(event) {
    this.setState({category: {name: event.target.value}});
  }

  uploadPhoto(event) {
    const file = event.target.files[0];

    const data = new FormData();
    data.append('image', file);

    const url = Api.getBaseUrl();

    const requestInfo = {
      method: 'POST',
      mode: "cors",
      body: data
    };
    
    fetch(`http://${url}/product/upload/image`, requestInfo)
      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return res.text().then(response => Promise.reject(response));
      })
      .then(json => {
        this.setState({photos: [{
          title: json.filename,
          url: json.path
        }]})

        console.log(this.state);
      })
      .catch(err => console.error(err));
    
  }

  create(event) {
    event.preventDefault();
    
    const url  = Api.getBaseUrl();

    const body = JSON.stringify({
      product: {
        name: this.state.name,
        category: this.state.category,
        model: this.state.model,
        price: this.state.price,
        description: this.state.description,
        photos: this.state.photos
      }
    });

    console.log(body);
    
    const requestInfo = {
      method: "POST",
      mode: "cors",
      body: body,
      headers: new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    }
    
    fetch(`http://${url}/product`, requestInfo)
      .then(response => {
        if(response.ok) {
          return response.json()
        }

        return response.text().then(res => Promise.reject(res));
      })
      .then(json => this.setState({message: `Produto ${this.state.name} cadastrado com sucesso!`}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="mainBody">
          <div className="container">
            <div className="row">
              <Sidebar/>
              <div className="span9" id="mainCol">
                <ul className="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                        <span className="divider">/</span>
                    </li>
                    <li className="active">Cadastro de Produtos</li>
                </ul>
                <h3 className="alert alert-primary" role="alert">{this.state.message}</h3>
                <h3> Cadastro de Produtos</h3>
                <hr className="soft" />

                <form onSubmit={this.create} method="POST">
                    <div className="form-group">
                        <label htmlFor="NomeProduto">Nome Produto</label>
                        <input type="text" className="form-control" id="NomeProduto" value={this.state.name} onChange={this.changeState.bind(this, "name")} placeholder="Nome do Produto"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CategoriaProduto">Categoria do Produto</label>
                        <select className="form-control" id="CategoriaProduto" value={this.state.category.name} onChange={this.changeCategory.bind(this)}>
                            <option>Roupas</option>
                            <option>Armas</option>
                            <option>Equipamentos</option>
                        </select>
                    </div>
                    <div className="form-group">
                        {/* <!--(preço) --> */}
                        <label htmlFor="ModeloProduto">Modelo do Produto</label>
                        <input type="text" className="form-control" id="ModeloProduto" placeholder="Modelo do Produto" value={this.state.model} onChange={this.changeState.bind(this, "model")}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ValorProduto">Valor do Produto</label>
                        <input type="text" className="form-control" id="ValorProduto" placeholder="R$12.34" value={this.state.price} onChange={this.changeState.bind(this, "price")}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="FotoProduto">Foto do Produto</label>
                        <input type="file" className="form-control-file" id="FotoProduto" onChange={this.uploadPhoto.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="DescricaoProduto">Descrição do Produto</label>
                        <textarea className="form-control" id="DescricaoProduto" rows="4" value={this.state.description} onChange={this.changeState.bind(this, "description")}></textarea>
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