import {Card, CardFooter, Image} from "@nextui-org/react";
import api from "@/lib/requestApi";
import Link from "next/link";

//const CardMovie =async ({movie}) => {
//export default async function CardMovie() {

const CardMovie = async ({movie}:any) => {
    //todo: get api movies
    const results = await api.getMovies(movie);
//console.log(movie);
    return (
        <div className="sm:text-center md:grid md:grid-cols-4 gap-5 pt-8 mb-10 flex flex-wrap justify-center mt-10">
            {
                results.length > 0 && results.map((movie: Movies) => (

                        <Link href={`/movie/${movie.id}`} key={movie.id}>
                            <Card isFooterBlurred
                                  className="w-full h-[300px] border dark:border-slate-600 transition ease-in-out delay-150 hover:-translate-y-px hover:scale-110 hover:opacity-60 duration-300 cursor-pointer"
                                  key={movie.id}>

                                <Image
                                    removeWrapper
                                    alt="Relaxing app background"
                                    className="z-0 w-full h-full object-cover"
                                    src={movie.image}
                                />

                                <CardFooter
                                    className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-white items-start flex-col">
                                    <h4 className="font-bold fo text-sm">{movie.title}</h4>
                                    <p className="text-tiny">{movie.year}</p>
                                    <small className="text-tiny"> Categoria</small>
                                </CardFooter>

                            </Card>
                        </Link>

                    )
                )
            }
        </div>
    );
};

export default CardMovie;