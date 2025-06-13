import { useContext, useState } from "react";
import { adicionar } from "../services/RegistroService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Novo() {
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);
  const handleSalvar = async (registro) => {
    const resposta = await adicionar(registro);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };
  return (
    <>
      <h2 className="pagina-novo">Novo Registro</h2>
      <Formulario onSubmit={handleSalvar} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Novo;
