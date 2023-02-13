package br.com.api.playlist.repositorio;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.api.playlist.modelo.MusicaModelo;

@Repository
@CrossOrigin(origins = "*")
public interface MusicaRepositorio extends CrudRepository<MusicaModelo, Long>{
    
}
