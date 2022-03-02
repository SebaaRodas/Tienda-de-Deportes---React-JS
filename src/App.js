import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import CartProvider from './components/context/CartProvider';
import Carrito from './components/CartWidget/Carrito';
import Footer from './components/Footer/Footer';
import Portada from './components/NavBar/Portada';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          {/* <Portada /> */}
          <Switch>
            
            {/* ruta home */}
            <Route exact path="/">
              <ItemListContainer greeting="Bienvenido a la Tienda de Deportes" />
            </Route>
            {/* ruta productos */}
            <Route path="/productos/:producto">
            <ItemListContainer />
            </Route>
            {/* ruta detalles */}
            <Route path="/detalles/:id">
              <ItemDetailContainer />
            </Route>
            {/* ruta marcas */}
            <Route path="/marcas/:marca">
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
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
