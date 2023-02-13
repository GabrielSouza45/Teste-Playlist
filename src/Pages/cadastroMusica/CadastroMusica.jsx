import InputLabel from "../../Components/inputLabel/inputLabel";
import Option from '../../Components/Label/optionLabel'
import './cadMusica.css'
import {BsPencil} from "react-icons/bs";
import {BsTrash} from "react-icons/bs";
import {IoIosCloseCircleOutline} from "react-icons/io";

const CadastroMusica = ({vetor, eventoMus, cadMusica, objMus, selecionarMusica, vetorMus, altMusica, rmvMusica, botaoMus}) => {
  return (
    <section className="cadastro-musica">
      <h3>Música</h3>
      <form className="cadastroMusica">
      
        <InputLabel
          texto="Nome da música"
          evento={eventoMus}
          valor={objMus.nome_musica}
          nome="nome_musica"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Ano de Lançamento"
          evento={eventoMus}
          valor={objMus.lancamento}
          nome="lancamento"
          tipo="number"
          holder="Digite o ano de lançamento"
        />

        <label>Cantor</label>
        <select name="id_cantor" id="id_cantor" onChange={eventoMus}>
        <option value="" >Escolha uma opção</option>
        {vetor.map((obj, indice) => (
          
          <option value={obj.id_cantor}>{obj.nome_cantor}</option>
          
        ))}
        
      </select>
    
      {botaoMus ? (
          <input type="button" className="buttonCadastrar" value="cadastrar" onClick={cadMusica} />
        ) : (
          <div className="buttons">
            <button  className="buttonEditar" id="alt" onClick={altMusica}><BsPencil /></button>
            <button  className="buttonEditar" id="rmv" onClick={rmvMusica}><BsTrash /></button>
            <button  className="buttonEditar" id="esc" ><IoIosCloseCircleOutline /></button>
          </div>
        )}
      </form>
    </section>
  );
};

export default CadastroMusica;
