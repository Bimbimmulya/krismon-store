import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductsPage from './pages/product';
import DetailProduct from './pages/detail-product';
import ErrorPage from './pages/404';
import HomePage from './pages';
import Cart from './pages/cart';
import Navbar from './components/Navbar/Navbar';
import '../src/App.css';
import '../src/components/Footer/app.scss'
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={DetailProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer/>
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
