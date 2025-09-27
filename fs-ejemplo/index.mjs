import fs from 'fs';

//leer un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

//escribir un archivo nuevo
fs.writeFile('./data/newFile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    //renombrar el archivo creado
    fs.rename('./data/newFile.txt', './data/renamedFile.txt', (err) => {
        if (err) throw err;
        console.log('Archivo renombrado');
    });
});
