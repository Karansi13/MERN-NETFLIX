export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjMyZjUxODU3YjczNDg5YTMzMTE1NDcwM2NjMDgwZSIsInN1YiI6IjY1YTE5YTRjMWI1YWU1MDEyYzczODFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHB8tQmk41-XK5syUYvdY0tUqc-1n4v-btFeEf-DK2o'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing"

export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"

export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated"

export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming"

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"

export const SEARCH_MOVIE_URL="https://api.themoviedb.org/3/trending/movie?query="