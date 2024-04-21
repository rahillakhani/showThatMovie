interface MovieRating {
    Source: string;
    Value: string;
}

export interface IMovieDetail {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export interface IMoviesState {
    moviesList: IMovie[];
    moviesDetail: IMovieDetail,
    movieSearch: string;
    variant: 1 | 2;
    year: string | number;
    title: string;
    loading: boolean;
    error: string | null | undefined;
}
