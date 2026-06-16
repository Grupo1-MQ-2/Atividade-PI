CREATE DATABASE WoodStock;
USE WoodStock;


CREATE TABLE madeira (
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
nome VARCHAR(100) NOT NULL,
descricao VARCHAR(250) NULL,

classificacao_de_durabilidade_natural VARCHAR(100) NOT NULL,
CONSTRAINT chkclassificacao_de_durabilidade_natural CHECK (classificacao_de_durabilidade_natural IN
('Altamente Resistente.','Moderadamente Resistente.','Não Resistente.' )),

Estabilidade_Dimensional VARCHAR(100) NOT NULL,
CONSTRAINT chkEstabilidade_Dimensional CHECK (Estabilidade_Dimensional IN
('Alta Estabilidade.','Baixa Estabilidade.')),

 Exposicao_ao_Ambiente VARCHAR(100) NOT NULL,
 CONSTRAINT chkExposicao_ao_Ambiente CHECK (Exposicao_ao_Ambiente IN
 ('Contato Direto com o Solo/Água.','Ambientes Úmidos Internos.')),

Necessidade_de_Tratamento_e_Selagem VARCHAR(100) NOT NULL,
CONSTRAINT chkExposicao_ao_Ambiente CHECK (Exposicao_ao_Ambiente IN
('Autoclave.','Acabamento Hidrofugante.'))
);


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table aquario (
	id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	descricao VARCHAR(300)
);
      

