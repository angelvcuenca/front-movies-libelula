const {BASE_URL, KEY_RAPIDAPI, HOST_RAPIDAPI, BASE_RAPIDAPI} = process.env;

interface APIFetch {
    getMovies: ({searchParams}: ServerParameters) => Promise<any>;
}

const apiMovies = {

    getMovies: async (searchParams:any) => {
        const buildUrl  = new URL(`${BASE_URL}`);
        const buildParams = new URLSearchParams("");

        if(searchParams.query){
            buildUrl.pathname = buildUrl.pathname+"/search-movie/"+searchParams.query;
        }else{
            buildUrl.pathname = buildUrl.pathname+"/all-movies";
        }
        console.log(`${buildUrl}`+`${buildParams}`);

        try {
            const response = await fetch(`${buildUrl}`+`${buildParams}`, {
                method: "GET",
                headers: new Headers({
                    "accept": "application/json",
                }),
                cache: "no-store",
            });

            if (response.status !== 200) throw new Error(response.statusText);
            return await response.json();

        } catch (error) {
            console.error(error);
            return null;
        }

    },
    getIdMovie: async (id: any) => {
        try {
            const response = await fetch(`${BASE_RAPIDAPI}/${id}`,{
                method: "GET",
                headers: new Headers({
                    "accept": "application/json",
                    "x-rapidapi-key":`${KEY_RAPIDAPI}`,
                    "x-rapidapi-host":`${HOST_RAPIDAPI}`,
                })
            });
            if (response.status !== 200) throw new Error(response.statusText);

            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export default apiMovies;