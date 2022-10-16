-- Exercício 1

CREATE TABLE Actor ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (255) NOT NULL, 
birth_date DATE NOT NULL, 
gender VARCHAR(6) NOT NULL 
);

CREATE TABLE Movie ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR (255) NOT NULL UNIQUE, 
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Actor (id, name, birth_date, gender) 
VALUES( 
"001", 
"Tony Ramos", 
"1948-08-25", 
"male" 
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "002",
  "Juliana Paes",
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  "1949-04-18", 
  "male"
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"004", 
"Deus é Brasileiro", 
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31", 
9 );

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- a) Uma FOREIGN KEY é um campo (ou coleção de campos) em uma tabela, que se refere à PRIMARY KEY em outra tabela.

-- b) 
INSERT INTO Rating
VALUES ("001","Muito engraçado!",8,"001"),
	   ("002","Muito bom!",7,"002"),
       ("003","Prende a nossa atenção",8,"003"),
       ("004","Muito boa a história",10,"004");
       

-- c)       
INSERT INTO Rating
VALUES ("005","Muito engraçado",10,"005");     
-- Resposta: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314085-mariana-goncalves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Tradução: Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha.

-- d)
ALTER TABLE Movie DROP COLUMN rating;

SELECT * FROM Movie;

-- e)
DELETE FROM Movie
WHERE id = "001";
-- Resposta: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Hopper-4314085-mariana-goncalves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Tradução: Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha

-- Exercício 2:
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- a) Uma tabela que relaciona a tabela de filmes e a tabela de atores.alter

-- b) 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
), (
	"004",
    "002"
), (
	"001",
    "004"
), (
	"001",
    "002"
), (
	"002",
    "003"
), (
	"003",
    "002"
);

SELECT * FROM MovieCast;

-- c)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "001"
);
-- Resposta: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314085-mariana-goncalves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Tradução: Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha

-- d) 
DELETE FROM MovieCast
WHERE actor_id = "001";
-- Foi possível apagar o ator.

-- Exercício 3:
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a)
-- INNER JOIN é uma cláusula que permite a junção entre duas ou mais tabelas, desde que hajam entrelaçamento entre todas.
-- ON informamos que a condição para a junção das duas tabelas é o ID da categoria ser o mesmo nas duas tabelas.

-- b)
SELECT m.title, m.id, r.rate 
FROM Movie as m
INNER JOIN Rating as r ON m.id = r.movie_id;