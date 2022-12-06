import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { getTurmasAtivas } from './endpoints/getTurmasAtivas'
import { createTurma } from './endpoints/createTurma'
import { updateModuloTurma } from './endpoints/updateModuloTurma'
import { createDocente } from './endpoints/createDocente'
import { getDocentes } from './endpoints/getDocentes'
import { getDocenteByNome } from './endpoints/getDocenteByNome'
import { createEstudante } from './endpoints/createEstudante'
import { getEstudantes } from './endpoints/getEstudantes'
import { getEstudanteByNome } from './endpoints/getEstudanteByNome'
import { updateEstudanteTurma } from './endpoints/updateEstudanteTurma'
import { updateDocenteTurma } from './endpoints/updateDocenteTurma'




dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

// Create turma
app.post("/turmas", createTurma)

// Get turmas
app.get("/turmas", getTurmasAtivas)

// Update Módulo turmas
app.put("/turmas/modulo/:nome", updateModuloTurma)

// Create docente
app.post("/docentes", createDocente)

// Get docentes
app.get("/docentes", getDocentes)

// Get docente by nome
app.get("/docentes/:nome", getDocenteByNome)

// Update Docente turmas
app.put("/docentes/edited/:nome", updateDocenteTurma)

// Create estudante
app.post("/estudantes", createEstudante)

// Get estudantes
app.get("/estudantes", getEstudantes)

// Get estudante by nome
app.get("/estudantes/:nome", getEstudanteByNome)

// Update Aluno turmas
app.put("/estudantes/edited/:nome", updateEstudanteTurma)






