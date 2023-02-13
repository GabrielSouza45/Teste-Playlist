drop database playlist;

create database playlist;
use playlist;

SELECT * FROM playlist.tb_musica;
CREATE TABLE tb_cantor (
`id_cantor` SMALLINT NOT NULL AUTO_INCREMENT,
`idade_cantor` SMALLINT NOT NULL,
`nome_cantor` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id_cantor`),
UNIQUE KEY 	`id_cantor` (`id_cantor`)
);

 DROP TABLE IF EXISTS `tb_musica`;
 
CREATE TABLE tb_musica (
`id_musica` SMALLINT NOT NULL AUTO_INCREMENT,
`lancamento` SMALLINT NOT NULL,
`nome_musica` VARCHAR(100) NOT NULL,
`id_cantor` SMALLINT NOT NULL,
PRIMARY KEY (`id_musica`),
KEY `id_cantor` (`id_cantor`)
);



ALTER TABLE `tb_musica` ADD CONSTRAINT `tb_musica_ibfk1` FOREIGN KEY (`id_cantor`) REFERENCES `tb_cantor` (`id_cantor`);