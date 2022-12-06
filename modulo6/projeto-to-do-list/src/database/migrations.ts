import connection from "./connection";

const criarTabelaUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE Users (
            id INT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            nickname VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE);
        `)

        console.log("Tabela de Usuários criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Tabela de Usuários.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaUsers() {
    try {
        await connection.raw(`
            INSERT INTO Users (id, name, nickname, email)
            VALUES 
            (1, "Mariana", "Mari", "mari@lbn.com"),
            (2, "Amanda", "Amandinha", "amandinha@lbn.com"),
            (3, "Camila", "Cami", "cami@lbn.com"),
            (4, "Rafael", "Rafa", "rafa@lbn.com"),
            (5, "Felipe", "Fe", "fe@lbn.com");
        `)
        
        console.log("Tabela de Usuários populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular Tabela de Usuários.")
        console.log(error.sqlMessage)
    }
}

criarTabelaUsers()
.then(() => popularTabelaUsers())
.finally(() => process.exit())


const criarTabelaToDoList = async () => {
  try {
      await connection.raw(`
          CREATE TABLE IF NOT EXISTS ToDoList (
          id INT PRIMARY KEY,
          title VARCHAR(100) NOT NULL,
          description VARCHAR(100) NOT NULL,
          limitDate VARCHAR(100) NOT NULL,
          status ENUM("to do", "doing", "done") NOT NULL,
          creatorUserId INT,
          FOREIGN KEY (creatorUserId) REFERENCES Users(id));
      `)

      console.log("Tabela de Usuários criada com sucesso.")
  } catch (error) {
      console.log("Erro ao criar Tabela de Usuários.")
      console.log(error.sqlMessage)
  }
}

async function popularTabelaToDoList() {
  try {
      await connection.raw(`
          INSERT INTO ToDoList (id, title, description, limitDate, status, creatorUserId)
          VALUES 
          (1, "Fazer Projeto ToDoList", "Concluir o projeto de Backend To Do List da Labenu", "12/09/2022", "doing", 1),
          (2, "Terminar Projeto Bank", "Concluir o projeto Bank da Labenu", "10/09/2022", "doing", 2),
          (3, "Iniciar Módulo Backend", "Iniciar o módulo de Backend da Labenu", "11/09/2022", "to do", 3),
          (4, "Fazer entrevista", "Comparecer na entrevista da empresa Ambev", "15/09/2022", "to do", 4),
          (5, "Fazer treinamento Nouvenn", "Realizar o treinamento para os funcionários de desenvolvimento da Nouvenn", "18/09/2022", "doing", 5);
      `)
      
      console.log("Tabela de To Do List populada com sucesso.")
  } catch (error) {
      console.log("Erro ao popular Tabela de To Do List.")
      console.log(error.sqlMessage)
  }
}

criarTabelaToDoList()
.then(() => popularTabelaToDoList())
.finally(() => process.exit())