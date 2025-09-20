import os from 'os';

//tener la arquitectura del sistema
console.log('Arquitectura:', os.arch());

//tipo de sistema operativo
console.log('Plataforma:', os.platform());

//cantidad total de memoria
console.log('Memoria total:', os.totalmem());

//memoria libre
console.log('Memoria libre:', os.freemem());

//información de la CPU
console.log('Información de la CPU:', os.cpus());