import path from 'path';
import {promises as fs} from 'fs';
import {buscarPorId} from '../../common'


export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'public/dataJson');
    const fileContents = await fs.readFile(jsonDirectory + '/jsonMovies.json', 'utf8');
    const resultados =  buscarPorId(fileContents, req.query.parameter);

    res.status(200).json(resultados);

}