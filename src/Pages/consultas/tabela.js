import { Table } from "react-bootstrap";
import "./consultas.css";
function Tabela({
  vetor,
  selecionar,
  altCantor,
  rmvCantor,
  vetorMus,
  selecionarMus,
}) {
  return (
    <>
      <section className="tabelaCantor">
        <h3>Cantores</h3>
        <div className="tables">
          <table className="tabela">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Selecionar</th>
              </tr>
            </thead>

            <tbody>
              {vetor.map((obj, indice) => (
                <tr key={indice}>
                  <td>{indice + 1}</td>
                  <td>{obj.nome_cantor}</td>
                  <td>{obj.idade_cantor}</td>
                  <td>
                    <button
                      className="btnSelecionar"
                      onClick={() => {
                        selecionar(indice);
                      }}
                    >
                      Selecionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Tabela;
