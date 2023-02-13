import React, { useEffect, useState } from "react";
import Tabela from "./tabela";

function Formulario() {
  // Objeto cantor
  const cantor = {
    id_cantor: 0,
    nome_cantor: "",
    idade_cantor: 0,
  };

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const botao = btnCadastrar;
  const [cantores, setCantor] = useState([]);
  const [objCantor, setObjCantor] = useState(cantor);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setCantor(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjCantor({ ...objCantor, [e.target.name]: e.target.value });
    console.log(e.target);
  };


   // Selecionar cantor
   const selecionarCantor = (indice) => {
    setObjCantor(cantores[indice]);
    setBtnCadastrar(false);
  };



  // Cadastrar cantor
  const cadastrarCantor = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objCantor),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setCantor([...cantores, retorno_convertido]);
          alert("Cantor cadastrado com sucesso!");
          limparFormulario();
        }
      });
  };

  // Alterar cantor
  const alterarCantor = () => {
    fetch("http://localhost:8080/alterar", {
      method: "put",
      body: JSON.stringify(objCantor),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Cantor alterado com sucesso!");

          //copia do vetor de cantores
          let vetorTemp = [...cantores];

          // indice
          let indice = vetorTemp.findIndex((p) => {
            return p.id_cantor === objCantor.id_cantor;
          });

          // alterar cantor do vetorTemp
          vetorTemp[indice] = objCantor;

          // atualizar o vetor de cantores
          setCantor(vetorTemp);

          limparFormulario();
        }
      });
  };

  //Limpar fomulario
  const limparFormulario = () => {
    setObjCantor(cantor);
    setBtnCadastrar(true);

    document.location.reload(true);
  };


// Remover cantor
const removerCantor = () => {
    fetch("http://localhost:8080/removerCantor/" + objCantor.id_cantor, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Cantor removido com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de cantores
        let vetorTemp = [...cantores];

        // indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id_cantor === objCantor.id_cantor;
        });

        // remover cantor do vetorTemp
        vetorTemp.splice(indice, 1);

        // atualizar o vetor de cantores
        setCantor(vetorTemp);

        limparFormulario();
      });
  };



  //retorno
  return (
    <>
      <form>
        <input
          type="text"
          value={objCantor.nome_cantor}
          onChange={aoDigitar}
          name="nome_cantor"
          placeholder="nome"
        />
        <input
          type="number"
          value={objCantor.idade_cantor}
          onChange={aoDigitar}
          name="idade_cantor"
          placeholder="idade"
        />

        {botao ? (
          <input type="button" value="cadastrar" onClick={cadastrarCantor} />
        ) : (
          <div>
            <input type="button" value="alterar" onClick={alterarCantor} />
            <input type="button" value="remover" onClick={removerCantor}/>
            <input type="button" value="cancelar" />
          </div>
        )}
      </form>
      <div>
        <Tabela vetor={cantores} selecionar={selecionarCantor} />
      </div>
      ;
    </>
  );
}

export default Formulario;
