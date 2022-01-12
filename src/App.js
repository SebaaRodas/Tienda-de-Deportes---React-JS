import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la Tienda de Deportes" />
    </>
  );
}

export default App;
