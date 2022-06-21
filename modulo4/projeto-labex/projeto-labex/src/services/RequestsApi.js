import axios from "axios";
import { baseUrl } from './url'

// Essa requisição retorna todas as viagens.
export const getTrips = async () => {
  try{
    const { data } = await axios.get(`${baseUrl}/trips`)
    return data.trips;
  }catch (error){
    console.log(error.response);
  }
} 