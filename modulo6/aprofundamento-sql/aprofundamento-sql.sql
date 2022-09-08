
-- Exercício 1
CREATE TABLE Projetos(
	id VARCHAR(6) PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL

);

DROP TABLE Pessoas;

DESCRIBE Projetos;



-- Exercício 2
INSERT INTO Projetos
VALUES ("001","LabeSky","LSy", "2023/10/05"),
	   ("002","Labefy","LFy", "2024/01/06"),
       ("003","AstroZoom","AZm", "2022/12/20");

SELECT * FROM Projetos;

-- Exercício 3
-- A)
ALTER TABLE Projetos
DROP COLUMN title;

-- B)
ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL;

-- C)
ALTER TABLE funcionarios
MODIFY email VARCHAR(100) UNIQUE;

DESCRIBE funcionarios;

-- Exercício 4
-- A)
ALTER TABLE Projetos
ADD description VARCHAR(100) NOT NULL;

-- B)
UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

-- Exercício 5
-- A)
SELECT *
FROM Projetos
ORDER BY dueDate DESC;

-- B)
SELECT  dueDate
FROM Projetos
GROUP BY dueDate;


