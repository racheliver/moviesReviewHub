export const fetchMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzk4YjFjYzgwZDcyZGRhZTg5N2Y1Mjk1ZDk4OWJhNyIsInN1YiI6IjY1NWNjODNlMDgxNmM3MDBlMDFjZDA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zdL9LKAJXk3bT7SBF2qtZVNv5NC-EzmKYAC7lItmrQc'
        }
      };
      
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const data = await res.json();
    console.log(data);
    return data;
};

export const fetchTvShows = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzk4YjFjYzgwZDcyZGRhZTg5N2Y1Mjk1ZDk4OWJhNyIsInN1YiI6IjY1NWNjODNlMDgxNmM3MDBlMDFjZDA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zdL9LKAJXk3bT7SBF2qtZVNv5NC-EzmKYAC7lItmrQc'
        }
      };
      
      
      const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      const data = await res.json();
      console.log(data);
      return data;
};