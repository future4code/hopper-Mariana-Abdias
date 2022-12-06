import { TDocente } from '../models/Docente'
import { TEstudante } from '../models/Estudante'
import { TTurma } from '../models/Turma'
import { THobbies } from '../models/Hobbies'
import { TEspecialidades } from '../models/Especialidades'
import { TDocenteEspecialidades } from '../models/DocenteEspecialidades'
import { TEstudanteHobbies } from '../models/EstudanteHobbies'

export const turmas: TTurma[] = [
  {
    id: 101,
    nome: 'Hopper',
    modulo: 5
  },
  {
    id: 102,
    nome: 'Hooks',
    modulo: 5
  },
  {
    id: 103,
    nome: 'Guimaraes',
    modulo: 3
  },
  {
    id: 104,
    nome: 'Barros',
    modulo: 4
  },
  {
    id: 105,
    nome: 'Gebru',
    modulo: 6
  }
]

export const estudantes: TEstudante[] = [
  {
    id: 201,
    nome: 'Mariana',
    email: 'mari@gmail.com',
    data_nasc: '1992/08/13',
    turma_id: 101
  },
  {
    id: 202,
    nome: 'Leticia',
    email: 'le@gmail.com',
    data_nasc: '1995/04/12',
    turma_id: 102
  },
  {
    id: 203,
    nome: 'Filipe',
    email: 'fifi@gmail.com',
    data_nasc: '1991/10/17',
    turma_id: 101
  },
  {
    id: 204,
    nome: 'Gabriel',
    email: 'gab@gmail.com',
    data_nasc: '1996/09/15',
    turma_id: 103
  },
  {
    id: 205,
    nome: 'Manu',
    email: 'manu@gmail.com',
    data_nasc: '1996/03/12',
    turma_id: 105
  },
]

export const estudanteHobbies: TEstudanteHobbies[] = [
  {
    id: 1,
    estudante_id: 201,
    hobbie_id: 402
  },
  {
    id: 2,
    estudante_id: 202,
    hobbie_id: 401
  },
  {
    id: 3,
    estudante_id: 203,
    hobbie_id: 403
  },
  {
    id: 4,
    estudante_id: 204,
    hobbie_id: 402
  },
  {
    id: 5,
    estudante_id: 205,
    hobbie_id: 401
  },
]

export const docentes: TDocente[] = [
  {
    id: 301,
    nome: 'Peu',
    email: 'peu@gmail.com',
    data_nasc: '1993/04/22',
    turma_id: 103
  },
  {
    id: 302,
    nome: 'Luan',
    email: 'luan@gmail.com',
    data_nasc: '1995/05/15',
    turma_id: 102
  },
  {
    id: 303,
    nome: 'PH',
    email: 'ph@gmail.com',
    data_nasc: '1992/07/18',
    turma_id: 101
  }
]

export const hobbies: THobbies[] = [
  {
    id: 401,
    nome: 'Jogar Vídeo Game'
  },
  {
    id: 402,
    nome: 'Ver séries'
  },
  {
    id: 403,
    nome: 'Andar de Bicicleta'
  }
]


export const especialidades: TEspecialidades[] = [
  {
    id: 501,
    nome: 'React'
  },
  {
    id: 502,
    nome: 'JS'
  },
  {
    id: 503,
    nome: 'Node'
  }
]

export const docenteEspecialidades: TDocenteEspecialidades[] = [
  {
    id: 1,
    docente_id: 301,
    especialidades_id: 502
  },
  {
    id: 2,
    docente_id: 302,
    especialidades_id: 503
  },
  {
    id: 3,
    docente_id: 303,
    especialidades_id: 501
  },
]
