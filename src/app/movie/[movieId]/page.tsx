import Image from "next/image";
import { FC } from "react";
import api from "@/lib/requestApi";

type MovieId = {
    movieId: string;
};

interface ServerParams {
    params: MovieId;
}

const Movie: FC<ServerParams> = async ({ params }) => {
    const { movieId } = params;
    const getMovie:MovieDetail = await api.getIdMovie(movieId);
    return (

        <div className="relative w-screen h-screen-1/3">


            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4">
                    <Image src={`${getMovie.image}`} width={400} height={700} alt=""/>
                </div>
                <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4">
                    <div className="justify-center pl-10 basis-2/4">
                        <h1 className="text-2xl font-bold uppercase">{getMovie.title}</h1>


                        <h2 className="text-2xl mt-10 uppercase font-bold">Sinopsis</h2>
                        <p className="text-lg">{getMovie.description}</p>

                        <h3 className="text-md uppercase font-bold mt-10">Genero</h3>
                        <ul>
                            {getMovie.genre.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-md uppercase font-bold mt-10">Año de estreno</h3>
                        <p className="text-lg">{getMovie.year}</p>
                        <h3 className="text-md uppercase font-bold mt-10">Calificacion</h3>
                        <p className="text-lg">{getMovie.rating}</p>
                        <h3 className="text-md uppercase font-bold mt-10">Director</h3>
                        <p className="text-lg">{getMovie.director}</p>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Movie;