import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/RegistroService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [registro, setregistro] = useState({});
  const [erro, setErro] = useState("");
  const id = rota.replace("/editar/", "");
  useEffect(() => {
    const carregar = async () => {
      const resposta = await buscarPorId(id);
      if (resposta.sucesso) {
        setregistro(resposta.dados);
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    };
  }, [id]);
  const handleSalvar = async (registro) => {
    const resposta = await modificar(id, registro);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
    carregar();
  };
  return (
    <>
      <h2>Editar registro</h2>
      <Formulario onSubmit={handleSalvar} valores={registro} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Editar;
