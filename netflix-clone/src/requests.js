const API_KEY = "69720523e5b6bf41c8503b8274901bf9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&`,
  fetchActionMovies:`/discover/movie/action_movies?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie/action_movies?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie/action_movies?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie/action_movies?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie/action_movies?api_key=${API_KEY}&with_genres=99`
}
export default requests;