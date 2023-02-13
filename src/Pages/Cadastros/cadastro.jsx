import CadastroCantor from "../cadastroCantor/CadastroCantor";
import CadastroMusica from "../cadastroMusica/CadastroMusica";
import Tabela from "../consultas/tabela";
import TabelaMusica from "../consultas/tabelaMusica";
import "./cadastro.css";

const Cadastro = ({
  botao,
  evento,
  cadCantor,
  objCantor,
  selecionar,
  vetor,
  altCantor,
  rmvCantor,
  eventoMus,
  cadMusica,
  objMus,
  selecionarMusica,
  vetorMus,
  altMusica,
  rmvMusica,
  botaoMus,
}) => {
  return (
    <>
      <section className="cadastro">
        <div className="cadastros">
          <CadastroCantor
            evento={evento}
            cadCantor={cadCantor}
            objCantor={objCantor}
            altCantor={altCantor}
            rmvCantor={rmvCantor}
            botao={botao}
          />

          {/* <button onClick={cadastrarCantor}>Cadastrar</button> */}

          <CadastroMusica
            eventoMus={eventoMus}
            cadMusica={cadMusica}
            objMus={objMus}
            selecionarMusica={selecionarMusica}
            vetorMus={vetorMus}
            altMusica={altMusica}
            rmvMusica={rmvMusica}
            botaoMus={botaoMus}
            vetor={vetor}
          />
          {/* <button onClick={cadastrarMusica}>Cadastrar</button> */}
        </div>
      </section>

      <section className="tabelaCantor">
        <Tabela vetor={vetor} selecionar={selecionar} />
      </section>
      <section className="tabelaMusica">
        <TabelaMusica vetor={vetorMus} selecionar={selecionarMusica} />
      </section>
    </>
  );
};

export default Cadastro;
