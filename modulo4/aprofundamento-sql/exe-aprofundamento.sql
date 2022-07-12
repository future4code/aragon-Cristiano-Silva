USE
  `aragon-cristiano-silva`;

SET
  SQL_SAFE_UPDATES = 0;

CREATE TABLE
  `Projetos`(
    /*Criar tabela*/
    id VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    datas DATE
  );

INSERT INTO
  `Projetos` (id, nome, title, datas)
  /*Adicionando novos usuarios*/
VALUES
  ("004", "LabeSky", "Lsy", "2023/10/05"),
  ("005", "Labefy", "LFy", "2024/01/06"),
  ("006", "AstroZoom", "AZm", "2022/12/20");

ALTER TABLE
  `Projetos`
  /*Deletanto a coluna title*/
  DROP COLUMN title;

DESCRIBE
  `Projetos`;

ALTER TABLE
  `Projetos`
  /*ALterando o nome da coluna datas para dueDate*/
  CHANGE datas dueDate DATE;

ALTER TABLE
  `Projetos`
  /*ALterando adicionando a restrição para email para que cada usuario tenha um email unico*/
  MODIFY email NOT NULL;

ALTER TABLE
  `Projetos`
  /*Adicionando a propriedade description*/
ADD
  description ENUM("Projeto de sistema em nuvem da Labenu");
 
UPDATE `Projetos`
SET description = "Projeto de sistema em nuvem da Labenu" /*Adicionando valor ao id 004*/
WHERE id = 004;

UPDATE `Projetos`
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." /*Adicionando valor ao id 005*/
WHERE id = 005;

UPDATE `Projetos`
SET description = "Projeto de rede de comunicação da Labenu." /*Adicionando valor ao id 006*/
WHERE id = 006;

SELECT * FROM `Projetos`;

SELECT * FROM `Projetos`
ORDER BY dueDate DESC ;   /*Listando por ordem decrescente o prazo de vencimento pegando pela data mais antiga.*/

SELECT COUNT(*),nome, dueDate
FROM `Projetos`
GROUP BY dueDate, nome        /*Retornando o nome e data dos proximos 02 projetos a serem encerrados*/
ORDER BY dueDate, nome ASC
LIMIT 2;
