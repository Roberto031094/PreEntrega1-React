function NavBar() {
    return (
      <nav className="navy">
        <ul className="nav-links d-flex flex-row justify-content-center list-unstyled m-0 p-0">
          <li className="m-3">
            <a href="#" className="text-decoration-none">Inicio</a>
          </li>
          <li className="mt-3">
            <p>|</p>
          </li>
          <li className="m-3">
            <a href="#" className="text-decoration-none">Ejemplares</a>
          </li>
          <li className="mt-3">
            <p>|</p>
          </li>
          <li className="m-3">
            <a href="#" className="cart">
              <img src="https://cdn-icons-png.freepik.com/512/1413/1413908.png" alt="" style={{ width: '34px', height: '34px' }}/>
              <span className="cart-count text-decoration-none">0</span>
            </a>
          </li>
          <li className="mt-3">
            <p>|</p>
          </li>
          <li className="m-3">
            <a href="#" className="text-decoration-none">Productos</a>
          </li>
          <li className="mt-3">
            <p>|</p>
          </li>
          <li className="m-3">
            <a href="#" className="text-decoration-none">Contacto</a>
          </li>
        </ul>
      </nav>
    );
  }

  
  
  export default NavBar;