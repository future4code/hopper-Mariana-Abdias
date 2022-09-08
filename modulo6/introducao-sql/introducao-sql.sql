-- Exercicio 1: Criar uma tabela
CREATE TABLE funcionarios(
	id VARCHAR(6) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL

);

-- Para descrever uma tabela
DESCRIBE funcionarios;

-- Para excluir uma tabela
-- DROP TABLE funcionarios

-- Exercicio 2: Inserir dados em uma tabela
INSERT INTO funcionarios
VALUES ("001","Luana","lua@lbn.com"),
	   ("002","Vinicius","vini@lbn.com"),
       ("003","Laura","lau@lbn.com");

-- Exercicio 3: Seleção de Tabelas	
-- A - Selecionar todos os usuários
-- SELECT * FROM funcionarios

-- B - Selecionar as informações de id e nome dos usuários da tabela, sendo id como identifier
-- SELECT id as identifier, nome FROM funcionarios

-- C - Selecionar apenas a informação da Laura, por id.
-- SELECT * FROM funcionarios
-- WHERE id = "003"

-- D - Selecionar apenas os usuários que tenham a letra “a” no seu nome
-- SELECT * FROM funcionarios
-- WHERE nome LIKE "%a%"

-- E - Selecionar apenas os usuários que tenham a letra “u” no seu nome e não tenham a letra "r"
-- SELECT * FROM funcionarios
-- WHERE nome LIKE "%u%"
-- AND nome NOT LIKE "%r%"

-- Exercicio 4: Inserir um novo usuário, selecionar todos e apagar o usuário inserido pelo id
INSERT INTO funcionarios
VALUES ("004","Yuzo","yuzo@lbn.com");

-- SELECT * FROM funcionarios

DELETE FROM funcionarios
WHERE id = "004";