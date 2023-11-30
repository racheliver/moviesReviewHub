const apiKey: string | undefined = import.meta.env.VITE_API_KEY;
export const rateMovie = async (movieId: number, rating: number) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            "content-type": 'application/json;charset=utf-8',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzk4YjFjYzgwZDcyZGRhZTg5N2Y1Mjk1ZDk4OWJhNyIsInN1YiI6IjY1NWNjODNlMDgxNmM3MDBlMDFjZDA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zdL9LKAJXk3bT7SBF2qtZVNv5NC-EzmKYAC7lItmrQc'
        },
        body: `{"value":${rating}}`
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?=${localStorage.getItem("guest_session_id")}&api_key=${apiKey}`, options)    
      const data = await res.json();
    console.log(data);
    console.log("process.env.VITE_API_KEY",apiKey);
    
    return data;
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            "content-type": 'application/json;charset=utf-8',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzk4YjFjYzgwZDcyZGRhZTg5N2Y1Mjk1ZDk4OWJhNyIsInN1YiI6IjY1NWNjODNlMDgxNmM3MDBlMDFjZDA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zdL9LKAJXk3bT7SBF2qtZVNv5NC-EzmKYAC7lItmrQc'
        },
        body: `{"value":${rating}}`
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/rating?=${localStorage.getItem("guest_session_id")}&api_key=${apiKey}`, options)    
      const data = await res.json();
    console.log(data);
    return data;

};
