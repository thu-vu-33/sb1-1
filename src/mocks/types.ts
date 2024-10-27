export interface Movie {
  id: number;
  title: string;
  image: string;
  views: number;
  genre: string;
}

export interface MovieDetails extends Movie {
  description?: string;
  episodes?: Array<{
    id: string;
    title: string;
    videoUrl: string;
  }>;
}