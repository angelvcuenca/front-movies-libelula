import path from 'path';
import {promises as fs} from 'fs';
import {buscarPorTitulo} from '../../common'


export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'public/dataJson');
    const fileContents = await fs.readFile(jsonDirectory + '/jsonMovies.json', 'utf8');
   // const resultados = buscarEnJSON(fileContents, req.query.parameter);
    const resultados = buscarPorTitulo(fileContents, req.query.parameter);

    res.status(200).json(resultados);

}