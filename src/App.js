import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>

          {/* ruta home */}
          <Route exact path="/">
            Hola soy la home
            <ItemListContainer greeting="Bienvenido a la Tienda de Deportes" />
          </Route>

          {/* ruta productos */}
          <Route path="/productos/:nombre">
            Estas en productos
          </Route>

          {/* ruta detalles */}
          <Route path="/detalles/:id">
            Estas en detalles del producto
            <ItemDetailContainer />
          </Route>
          
          {/* ruta marcas */}
          <Route path="/marcas/:marca">
            Estas en marcas
          </Route>

          {/* ruta contacto */}
          <Route exact path="/contacto">
            Estas en contacto
          </Route>

          {/* ruta carrito */}
          <Route exact path="/carrito">
            listo para comprar
          </Route>

        </Switch>
        {/* <Fo /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
