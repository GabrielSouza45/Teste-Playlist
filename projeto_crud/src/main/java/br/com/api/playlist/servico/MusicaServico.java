package br.com.api.playlist.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.api.playlist.modelo.MusicaModelo;
import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.repositorio.MusicaRepositorio;

@Service
@CrossOrigin(origins = "*")
public class MusicaServico {

    @Autowired
    private MusicaRepositorio mr;

    @Autowired
    private RespostaModelo rm;

    // Método para listar
    public Iterable<MusicaModelo> listar() {
        return mr.findAll();
    }

    // Método para cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(MusicaModelo mm, String acao) {
        if (mm.getNome_musica().equals("")) {

            rm.setMensagem("O nome da música é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (mm.getLancamento().equals(0) || mm.getLancamento().equals(null) || mm.getLancamento().equals("")) {
            rm.setMensagem("A data de lançamento é obrigatória.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        
        } else if ((mm.getId_cantor().equals(0) || mm.getId_cantor().equals(null) || mm.getId_cantor().equals(""))){
            rm.setMensagem("O nome do cantor é obrigatório.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<MusicaModelo>(mr.save(mm), HttpStatus.CREATED);

            } else {
                return new ResponseEntity<MusicaModelo>(mr.save(mm), HttpStatus.OK);

            }
        }

    }

    //Método para remover
    public ResponseEntity<RespostaModelo> remover(long id_musica){

        mr.deleteById(id_musica);

        rm.setMensagem("Removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }

}
