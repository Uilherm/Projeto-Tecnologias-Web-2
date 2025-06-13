import { useContext } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Menu() {
  const { setRota } = useContext(RotaContext);
  const handleNavegar = (rota) => (e) => {
    e.preventDefault();
    setRota(rota);
  };
  return (
    <nav>
      <ul className="menu">
        <li>
          <button className="menu-button" onClick={handleNavegar("/listar")}>
            Registros
          </button>
        </li>
        <li>
          <button className="menu-button" onClick={handleNavegar("/novo")}>
            Novo Registro
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
