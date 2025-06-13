function InputDtNasc(props) {
  return (
    <>
      <label htmlFor="dtNasc">Data de Nascimento</label>
      <input
        type="date"
        id="dtNasc"
        name="dtNasc"
        value={props.valor}
        onChange={props.onChange}
      />
      {props.erro && <p>{props.erro}</p>}
    </>
  );
}

export default InputDtNasc;
