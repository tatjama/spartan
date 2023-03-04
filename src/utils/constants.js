export const typesList = ["movie", "series", "episode"];
export const yearsList = () => Array.from( Array(100),(e,i)=> 2022-i)
//urls
export const urlBase = process.env.REACT_APP_OMDB_API_BASE_URL;
export const key = process.env.REACT_APP_OMDB_API_KEY;