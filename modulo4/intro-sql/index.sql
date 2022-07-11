USE `aragon-cristiano-silva`;

SET SQL_SAFE_UPDATES = 0;


CREATE TABLE `Usuarios_Funcionarios`(   /*Criar tabela*/
	id VARCHAR(10) PRIMARY KEY,
  	nome VARCHAR(255) NOT NULL,
  	email VARCHAR(255) NOT NULL UNIQUE
);


INSERT INTO `Usuarios_Funcionarios` (id,nome,email)  /*Inserir dados*/
VALUES
		("001","Luana","Luana@lbn.com"),
        ("002","Vinicius","vini@lbn.com"),
        ("003","Laura","lau@lbn.com");
        

SELECT * FROM `Usuarios_Funcionarios` /* Lista todos os dados inseridos*/

SELECT id AS identifier , nome FROM `Usuarios_Funcionarios` /*Lista */


SELECT nome, email
FROM `Usuarios_Funcionarios`   /*Lista nome e email de usuário por id expecifica.*/
WHERE id = "001" 


SELECT id, nome
FROM `Usuarios_Funcionarios` /*Lista todos os usuários que contenham a letra "a" no nome*/
WHERE nome LIKE "%a"


SELECT  * 
FROM `Usuarios_Funcionarios`
WHERE nome NOT LIKE "r%" AND nome LIKE "%u"; /*Lista usuarios especificos por letra mencionada*/


DESCRIBE `Usuarios_Funcionarios` /*Lista a estrutura da tabela e seus tipos*/

INSERT INTO `Usuarios_Funcionarios`     /*Adicionar mais um usuario a lista de funcionários*/
VALUES ("004", "yUZO","yuzo@lbn.com")

DELETE FROM `Usuarios_Funcionarios`  /*Deleta usuário especifico passando a WHERE selecionando pela ID*/
WHERE id = "004"

