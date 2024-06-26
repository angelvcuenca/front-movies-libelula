import path from 'path';
import {promises as fs} from 'fs';

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'public/dataJson');
    const fileContents = await fs.readFile(jsonDirectory + '/jsonMovies.json', 'utf8');

        res.status(200).json(JSON.parse(fileContents));

}