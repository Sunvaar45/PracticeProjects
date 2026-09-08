export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: number[];
  adult: boolean;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISelectedMovie extends IMovie {
  Rating: number;
  Duration: number;
}
