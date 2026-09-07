export interface IMovie {
  Id: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface ISelectedMovie extends IMovie {
  Rating: number;
  Duration: number;
}
