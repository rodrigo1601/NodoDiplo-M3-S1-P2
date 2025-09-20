import path from 'path';

//definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

//tener directorio base
const dirName = path.dirname(filePath);
console.log('Directoro base:', dirName);

//nombre del archivo sin extension
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//extension del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);