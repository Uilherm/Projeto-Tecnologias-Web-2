function InputSexo(props) {
  return (
    <>
      <label htmlFor="sexo">Sexo</label>
      <div className="sexo-options">
        <label>
          <input
            type="radio"
            name="sexo"
            value="Masculino"
            checked={props.valor === "Masculino"}
            onChange={props.onChange}
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            name="sexo"
            value="Feminino"
            checked={props.valor === "Feminino"}
            onChange={props.onChange}
          />
          Feminino
        </label>
      </div>
      {props.erro && <p>{props.erro}</p>}
    </>
  );
}

export default InputSexo;
