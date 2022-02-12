import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import CartProvider from './components/context/CartProvider';
import Carrito from './components/CartWidget/Carrito';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            {/* ruta home */}
            <Route exact path="/">
              <ItemListContainer greeting="Bienvenido a la Tienda de Deportes" />
            </Route>
            {/* ruta productos */}
            <Route path="/productos/:nombre">
              Estas en productos
            </Route>
            {/* ruta detalles */}
            <Route path="/detalles/:id">
              <ItemDetailContainer />
            </Route>
            {/* ruta marcas */}
            <Route path="/marcas/:marca">
              {/* <Marcas /> */}
              <ItemListContainer />
            </Route>
            {/* ruta contacto */}
            <Route exact path="/contacto">
              Estas en contacto
            </Route>
            {/* ruta carrito */}
            <Route exact path="/carrito">
              <Carrito />
            </Route>
          </Switch>
          {/* <Fo /> */}
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
