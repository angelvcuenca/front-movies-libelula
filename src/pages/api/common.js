// Función para buscar en un JSON
export function buscarEnJSON(json, termino) {
    const objetoJSON = typeof json === 'string' ? JSON.parse(json) : json;
    const resultados = [];

    function buscar(objeto, termino) {
        for (let clave in objeto) {
            if (typeof objeto[clave] === 'object') {
                buscar(objeto[clave], termino);
            } else if (typeof objeto[clave] === 'string' && objeto[clave].toLowerCase().includes(termino.toLowerCase())) {
                resultados.push(objeto);
                break; // Opcional: si solo quieres la primera coincidencia, puedes romper el bucle
            }
        }
    }

    buscar(objetoJSON, termino);
    return resultados;
}

// Función para buscar por ID en un JSON
export function buscarPorId(json, id) {
    const objetoJSON = typeof json === 'string' ? JSON.parse(json) : json;

    for (let i = 0; i < objetoJSON.length; i++) {
        if (objetoJSON[i].id === id) {
            return objetoJSON[i]; // Devolver el objeto encontrado
        }
    }
    return {'message': 'No hay resultados con el id enviado'};

}

// Función para buscar coincidencias en el campo 'title'
export function buscarPorTitulo(json, title) {
    const objetoJSON = typeof json === 'string' ? JSON.parse(json) : json;
    return objetoJSON.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));

}