import icono from './components/CartWidget.js'
import ItemListContainer from './components/ItemListContainer.js'

function NavBar () {
    return (
      <div className="App">
            <icono/>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="nosotros.html" class="nav-link">Nosotros</a></li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="tienda.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tienda</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <a class="dropdown-item" href="tienda.html">Vinos</a>
                  <a class="dropdown-item" href="tienda.html">Espumosos</a>
                  <a class="dropdown-item" href="tienda.html">Destilados</a>
                  <a class="dropdown-item" href="tienda.html">Cervezas</a>
                </div>
              </li>
                <li class="nav-item"><a href="aprendemas.html" class="nav-link">Aprendé +</a></li>
                <li class="nav-item"><a href="contacto.html" class="nav-link">Contacto</a></li>
              </ul>
            </div>
      </div>
    );
  }
  export default NavBar;

