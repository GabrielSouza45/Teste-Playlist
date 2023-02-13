package br.com.api.playlist.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_cantor")

@Getter
@Setter

public class CrudModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long   id_cantor;
    private String nome_cantor;
    private Integer idade_cantor;
}
