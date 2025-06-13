import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/RegistroService";
import Listagem from "./Listagem.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Listar() {
  const [registros, setregistros] = useState([]);
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const carregar = async () => {
    const resposta = await buscarTodos();
    if (resposta.sucesso) {
      setregistros(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleModificar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      await carregar();
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <div className="pagina-listar">
      <h2>Registros</h2>
      <Listagem
        registros={registros}
        onModificar={handleModificar}
        onRemover={handleRemover}
      />
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

export default Listar;
