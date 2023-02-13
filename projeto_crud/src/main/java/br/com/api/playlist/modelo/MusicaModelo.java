package br.com.api.playlist.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_musica")

@Getter
@Setter

public class MusicaModelo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long   id_musica;
    private String nome_musica;
    private Integer lancamento;
    private Integer id_cantor;

}
