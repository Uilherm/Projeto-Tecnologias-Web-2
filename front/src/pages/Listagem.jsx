function Listagem({ registros, onModificar, onRemover }) {
  if (!registros || registros.length === 0) {
    return <p>Nenhum registro encontrado.</p>;
  }

  return (
    <section className="listagem-container">
      {registros.map((registro) => (
        <article className="registro-box" key={registro.id}>
          <header>
            <h3>{registro.nome}</h3>
            <p>
              <strong>Sexo:</strong> {registro.sexo}
            </p>
            <p>
              <strong>Data de Nascimento:</strong> {registro.dtNasc}
            </p>
          </header>
          <address>
            <p>
              <strong>Email:</strong> {registro.email}
            </p>
            <p>
              <strong>Telefone:</strong> {registro.telefone}
            </p>
          </address>
          <footer className="registro-footer">
            <button onClick={() => onModificar(registro.id)}>Editar</button>
            <button onClick={() => onRemover(registro.id)}>Remover</button>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default Listagem;
