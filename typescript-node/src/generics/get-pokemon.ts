import axios from 'axios';
import { IPokemon } from '../interfaces';

export const getPokemon = async (id: number): Promise<IPokemon> => {
    const { data } = await axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data;
}