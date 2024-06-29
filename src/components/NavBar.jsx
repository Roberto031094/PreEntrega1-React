import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navy">
      <ul className="nav-links d-flex flex-row justify-content-center list-unstyled m-0 p-0  text-center">
        <li className="m-3" style={{ width: '80px'}}>
          <a href="#" className="text-decoration-none">Inicio</a>
        </li>
        <li className="mt-3">
          <p>|</p>
        </li>
        <li className="m-3" style={{ width: '80px'}}>
          <a href="#" className="text-decoration-none">Ejemplares</a>
        </li>
        <li className="mt-3">
          <p>|</p>
        </li>
        <li className="m-3" style={{ width: '80px'}}>
        <CartWidget />
        </li>
        <li className="mt-3">
          <p>|</p>
        </li>
        <li className="m-3" style={{ width: '80px'}}>
          <a href="#" className="text-decoration-none">Productos</a>
        </li>
        <li className="mt-3">
          <p>|</p>
        </li>
        <li className="m-3" style={{ width: '80px'}}>
          <a href="#" className="text-decoration-none">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}


  
export default NavBar;