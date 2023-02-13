package br.com.api.playlist.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.playlist.modelo.CrudModelo;
import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.repositorio.CrudRepositorio;

@Service
public class CrudServico {

    @Autowired
    private CrudRepositorio cr;

    @Autowired
    private RespostaModelo rm;

    //Método para listar 
    public Iterable<CrudModelo> listar(){
        return cr.findAll();
    }

    //Método para cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(CrudModelo cm, String acao){
        if(cm.getNome_cantor().equals("")){

            rm.setMensagem("O nome do músico é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if ((cm.getIdade_cantor().equals(0) || cm.getIdade_cantor().equals(null) || cm.getIdade_cantor().equals(""))){
            rm.setMensagem("A idade do músico é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else{
            if (acao.equals("cadastrar")){
                return new ResponseEntity<CrudModelo>(cr.save(cm), HttpStatus.CREATED);

            }else{
                return new ResponseEntity<CrudModelo>(cr.save(cm), HttpStatus.OK);

            }
        }
        
    }


    //Método para remover
    public ResponseEntity<RespostaModelo> remover(long id_cantor){

        cr.deleteById(id_cantor);

        rm.setMensagem("Removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
 }
