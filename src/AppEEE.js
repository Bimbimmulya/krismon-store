import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";
import Navbar from "./components/Navbar";
import Products from "./pages/product";
import Product from "./pages/detail-product";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
