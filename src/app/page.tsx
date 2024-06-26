
import CardMovie from "@/components/cardMovie";
import {FC} from "react";
import {Suspense} from "react";

//export default async function Home(props:any) {
   const  Home: FC<ServerParameters> = async ({searchParams}) =>{
    return (
      <main className="md:container mx-auto pt-5">
          <h2 className="text-center font-bold text-2xl">Libelula Movies</h2>
          <Suspense fallback={<>Loading...</>}>
          <CardMovie movie={searchParams}/>
              </Suspense>
      </main>
  );
}

export default Home;
