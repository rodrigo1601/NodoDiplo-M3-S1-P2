import fs from 'fs';

//leer un archivo de manera asincrona
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

//escribir un archivo nuevo
fs.writeFile('./newFile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    //renombrar el archivo creado
    fs.rename('./newFile.txt', './renamedFile.txt', (err) => {
        if (err) throw err;
        console.log('Archivo renombrado');
    });
});
