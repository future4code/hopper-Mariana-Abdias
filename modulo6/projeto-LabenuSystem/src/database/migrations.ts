import connection from './connection'
import { turmas, estudantes, docentes, hobbies, especialidades, estudanteHobbies, docenteEspecialidades } from './data'
import {
  TABLE_TURMA,
  TABLE_ESTUDANTE,
  TABLE_DOCENTE,
  TABLE_HOBBIES,
  TABLE_ESPECIALIDADES,
  TABLE_ESTUDANTE_HOBBIES,
  TABLE_DOCENTE_ESPECIALIDADES
} from './tableNames'

const createTables = async () => {
  await connection
    .raw(
      `
DROP TABLE IF EXISTS ${TABLE_TURMA}, ${TABLE_ESTUDANTE}, ${TABLE_DOCENTE}, ${TABLE_HOBBIES}, ${TABLE_ESPECIALIDADES}, ${TABLE_ESTUDANTE_HOBBIES}, ${TABLE_DOCENTE_ESPECIALIDADES};

CREATE TABLE IF NOT EXISTS ${TABLE_TURMA}(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    modulo INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE}(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id INT NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_HOBBIES}(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE_HOBBIES}(
    id INT NOT NULL PRIMARY KEY,
    estudante_id INT NOT NULL,
    hobbie_id INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES ${TABLE_ESTUDANTE}(id),
    FOREIGN KEY (hobbie_id) REFERENCES ${TABLE_HOBBIES}(id)
  );

CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE}(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id INT NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESPECIALIDADES}(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE_ESPECIALIDADES}(
    id INT NOT NULL PRIMARY KEY,
    docente_id INT NOT NULL,
    especialidades_id INT NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES ${TABLE_DOCENTE}(id),
    FOREIGN KEY (especialidades_id) REFERENCES ${TABLE_ESPECIALIDADES}(id)
);
    `
    )
    .then(() => {
      console.log(`Tables created successfully!`)
      insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
  try {
    await connection(TABLE_TURMA)
      .insert(turmas)
      .then(() => console.log(`${TABLE_TURMA} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_ESTUDANTE)
      .insert(estudantes)
      .then(() => console.log(`${TABLE_ESTUDANTE} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_DOCENTE)
      .insert(docentes)
      .then(() => console.log(`${TABLE_DOCENTE} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_HOBBIES)
      .insert(hobbies)
      .then(() => console.log(`${TABLE_HOBBIES} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_ESTUDANTE_HOBBIES)
      .insert(estudanteHobbies)
      .then(() => console.log(`${TABLE_ESTUDANTE_HOBBIES} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_ESPECIALIDADES)
      .insert(especialidades)
      .then(() => console.log(`${TABLE_ESPECIALIDADES} populated!`))
      .catch((error: any) => printError(error))

    await connection(TABLE_DOCENTE_ESPECIALIDADES)
      .insert(docenteEspecialidades)
      .then(() => console.log(`${TABLE_DOCENTE_ESPECIALIDADES} populated!`))
      .catch((error: any) => printError(error))

  } catch (error: any) {
    console.log(error.sqlMessage || error.message)
  } finally {
    console.log('Ending connection!')

    return connection.destroy()
  }
}

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message)
}

createTables()
