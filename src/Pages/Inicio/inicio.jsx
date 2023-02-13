import ButtonInicio from "../../Components/inicio/buttonInicio";
import { Link } from "react-router-dom";
import "./inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="main">
        <h1 id="grid1" className="titulo">
          Olá
        </h1>

        <Link id="grid2" to={"/Cadastro"}>
          <ButtonInicio texto="Cadastrar" click="cadastrar()" cor="roxo" />
        </Link>
        <Link id="grid3" to={"/Consulta"}>
          <ButtonInicio texto="Consultar" click="consultar()" cor="roxo" />
        </Link>
      </div>
    </>
  );
};

export default Inicio;
