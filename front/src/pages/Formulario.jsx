import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx";
import InputTelefone from "../components/InputTelefone.jsx";
import InputEmail from "../components/InputEmail.jsx";
import InputSexo from "../components/InputSexo.jsx";
import InputDtNasc from "../components/InputDtNasc.jsx";

function Formulario(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");

  const [telefone, setTelefone] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const [sexo, setSexo] = useState("");
  const [erroSexo, setErroSexo] = useState("");

  const [dtNasc, setDtNasc] = useState("");
  const [erroDtNasc, setErroDtNasc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErroNome("");
    setErroTelefone("");
    setErroEmail("");
    setErroSexo("");
    setErroDtNasc("");

    let hasError = false;

    if (!nome) {
      setErroNome("Nome é obrigatório");
      hasError = true;
    }
    if (!telefone) {
      setErroTelefone("Telefone é obrigatório");
      hasError = true;
    }
    if (!email) {
      setErroEmail("Email é obrigatório");
      hasError = true;
    }
    if (!sexo) {
      setErroSexo("Sexo é obrigatório");
      hasError = true;
    }
    if (!dtNasc) {
      setErroDtNasc("Data de nascimento é obrigatória");
      hasError = true;
    }

    if (!hasError) {
      props.onSubmit({ nome, telefone, email, sexo, dtNasc });
      setNome("");
      setTelefone("");
      setEmail("");
      setSexo("");
      setDtNasc("");
    }
  };

  useEffect(() => {
    if (props.valores) {
      setNome(props.valores.nome || "");
      setTelefone(props.valores.telefone || "");
      setEmail(props.valores.email || "");
      setSexo(props.valores.sexo || "");
      setDtNasc(props.valores.dtNasc || "");
    }
  }, [props.valores]);

  return (
    <section className="formulario-container">
      <h2>{props.titulo || "Cadastro de Pessoa"}</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <InputNome
          valor={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erroNome}
        />
        <InputTelefone
          valor={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          erro={erroTelefone}
        />
        <InputEmail
          valor={email}
          onChange={(e) => setEmail(e.target.value)}
          erro={erroEmail}
        />
        <InputSexo
          valor={sexo}
          onChange={(e) => setSexo(e.target.value)}
          erro={erroSexo}
        />
        <InputDtNasc
          valor={dtNasc}
          onChange={(e) => setDtNasc(e.target.value)}
          erro={erroDtNasc}
        />
        <div className="formulario-actions">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </section>
  );
}

export default Formulario;
