import NavBar from './components/NavBar.js'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './App.css';
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </>
  );
}

export default App;
