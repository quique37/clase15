//Revisa la documentación de process
//Escribe un script donde obtengas información del proceso actual: memoria, directorio de ejecución,
// variables de entorno, cpu utilizado e imprimas el resultado en pantalla


console.log(process.memoryUsage());
console.log(`Current directory: ${process.cwd()}`);
console.log(process.cpuUsage());
console.log(process.execPath);
console.log(process.env);

