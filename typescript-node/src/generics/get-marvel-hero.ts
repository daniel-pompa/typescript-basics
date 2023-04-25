import axios from 'axios';
import { IMarvelHero } from '../interfaces';

export const getMarvelHero = async (name: string): Promise<IMarvelHero> => {
    const baseUrl = 'https://gateway.marvel.com';
    const endpoint = 'v1/public/characters';
    const apikey = process.env.MARVEL_API_KEY;
    const hash = process.env.HASH;
    const ts = process.env.TS;
    const { data } = await axios.get<IMarvelHero>(`${baseUrl}/${endpoint}?apikey=${apikey}&hash=${hash}&ts=${ts}&name=${name}`);
    return data;
}