import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
export const getAnimeList = async () => {
    const Anime = await axios.get(`${baseUrl}/anime?page=1&sfw=true&genres_exclude=9`)
    return Anime.data.data
}
export const getTopAnime = async () => {
    const Anime = await axios.get(`${baseUrl}/top/anime?page=1&sfw=true&genres_exclude=9`)
    return Anime.data.data
}

export const getAnimeSearch = async (q) => {
    const AnimeSearch = await axios.get(`${baseUrl}/anime?page=1&sfw=true&genres_exclude=9&q=${q}`)
    return AnimeSearch.data.data
}

export const getAnimeDetail = async (id) => {
    const AnimeDetail = await axios.get(`${baseUrl}/anime/${id}`)
    return AnimeDetail.data.data
}