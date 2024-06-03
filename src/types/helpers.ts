interface Movies {
    rank: number;
    title: string;
    description: string;
    image: string;
    big_image: string;
    genre: string[];
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    imdbid: string;
    imdb_link: string;
}

interface MovieDetail {
    rank: number;
    title: string;
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    image: string;
    big_image: string;
    description: string;
    trailer: string;
    trailer_embed_link: string;
    trailer_youtube_id: string;
    genre: string[];
    director: string[];
    writers: string[];
    imdbid: string;
    imdb_link: string;
}

interface movieParameters {
    query: string
}

interface ServerParameters {
    searchParams: movieParameters
}