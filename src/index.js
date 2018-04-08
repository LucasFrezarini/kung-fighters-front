import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import MainPage     from "./pages/MainPage";
import NewProduct   from "./pages/NewProduct";
import ListProducts from "./pages/ListProducts";

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
      <Route path="/products" component={ListProducts} />
      <Route path="/newProduct" component={NewProduct}/> { /* Rota temporária, será mudada depois*/}
    </Route>
  </Router>), 
  document.getElementById('root'));
registerServiceWorker();
