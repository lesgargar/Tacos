
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Pedido from './components/Pedido';

//app es el componente principal 
//en el cual podemos importar otros componentes o sistemas de rutas 
//el codigo debe estar separado en archivos pequeños
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Menu/>
      <Pedido/>
    </div>
  );
}

export default App;
