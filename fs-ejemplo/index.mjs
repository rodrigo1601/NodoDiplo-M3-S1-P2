import fs from 'fs';

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

fs.writeFile('./newFile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    fs.rename('./newFile.txt', './renamedFile.txt', (err) => {
        if (err) throw err;
        console.log('Archivo renombrado');
    });
});
