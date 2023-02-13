//import ButtonEnviar from './Components/buttonEnviar/ButtonEnviar.jsx'
import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cadastro from "./Pages/Cadastros/cadastro";

import Tabela from "./Pages/consultas/tabela";
import Inicio from "./Pages/Inicio/inicio.jsx";
import TabelaMusica from "./Pages/consultas/tabelaMusica";

function App() {
  // Objeto cantor
  const cantor = {
    id_cantor: 0,
    nome_cantor: "",
    idade_cantor: 0,
  };

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [cantores, setCantor] = useState([]);
  const [objCantor, setObjCantor] = useState(cantor);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarCantor")
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
    fetch("http://localhost:8080/cadastrarCantor", {
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
    fetch("http://localhost:8080/alterarCantor", {
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




  // Remover Musica
  const removerMusica = () => {
    fetch("http://localhost:8080/removerMusica/" + objMusica.id_musica, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Musica removida com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de Musica
        let vetorTemp = [...musicas];

        // indice
        let indices = vetorTemp.findIndex((p) => {
          return p.id_musica === objMusica.id_musica;
        });

        // remover Musica do vetorTemp
        vetorTemp.splice(indices, 1);

        // atualizar o vetor de Musica
        setCantor(vetorTemp);

        limparFormulario();
      });
  };





  // Objeto musica
  const musica = {
    id_musica: 0,
    nome_musica: "",
    lancamento: 0,
    id_cantor: 0,
  };

  // UseState
  const [btnCadastrarMus, setBtnCadastrarMus] = useState(true);
  const [musicas, setMusica] = useState([]);
  const [objMusica, setObjMusica] = useState(musica);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarMusica")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setMusica(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitarMus = (e) => {
    setObjMusica({ ...objMusica, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  // Selecionar Musica
  const selecionarMusica = (indices) => {
    setObjMusica(musicas[indices]);
    setBtnCadastrarMus(false);
  };

  // Cadastrar Musica
  const cadastrarMusica = () => {
    fetch("http://localhost:8080/cadastrarMusica", {
      method: "post",
      body: JSON.stringify(objMusica),
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
          setMusica([...musicas, retorno_convertido]);
          alert("Musica cadastrado com sucesso!");
          limparFormularioMus();
        }
      });
  };

  // Alterar Musica
  const alterarMusica = () => {
    fetch("http://localhost:8080/alterarMusica", {
      method: "put",
      body: JSON.stringify(objMusica),
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
          alert("Musica alterado com sucesso!");

          //copia do vetor de Musica
          let vetorTemp = [...musicas];

          // indice
          let indices = vetorTemp.findIndex((p) => {
            return p.id_musica === objMusica.id_musica;
          });

          // alterar cantor do vetorTemp
          vetorTemp[indices] = objMusica;

          // atualizar o vetor de Musica
          setMusica(vetorTemp);

          limparFormulario();
        }
      });
  };

  //Limpar fomulario
  const limparFormularioMus = () => {
    setObjMusica(musica);
    setBtnCadastrarMus(true);

    document.location.reload(true);
  };

  

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Cadastro
              evento={aoDigitar}
              eventoMus={aoDigitarMus}
              cadCantor={cadastrarCantor}
              cadMusica={cadastrarMusica}
              objCantor={objCantor}
              objMus={objMusica}
              selecionar={selecionarCantor}
              selecionarMusica={selecionarMusica}
              vetor={cantores}
              vetorMus={musicas}
              altCantor={alterarCantor}
              altMusica={alterarMusica}
              rmvCantor={removerCantor}
              rmvMusica={removerMusica}
              botao={btnCadastrar}
              botaoMus={btnCadastrarMus}
            />
          }
        />
        <Route
          path="/Consulta"
          element={<Tabela vetor={cantores} selecionar={selecionarCantor} />}
        />
        <Route
          path="/ConsultaMusica"
          element={
            <TabelaMusica vetor={musicas} selecionar={selecionarMusica} />
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
