
const API_KEY = "5e40ebdf9139fb457b240fe65b643628";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

interface ITv {
    id: number;
    backdrop_path: string;
    poster_path: string;
    name: string;
    overview: string;
}

export interface IGetMovieResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    pages: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IGetTvResult {
    first_air_date: string,
    pages: number;
    results: ITv[];
    total_pages: number;
    total_results: number;
}

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json()
    );
}

export function getTvshows(){
    return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then((response) => response.json()
    );
}