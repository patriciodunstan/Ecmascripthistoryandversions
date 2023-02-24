try {
    hello();
} catch (error) {
    console.log(error);
}

/* output
ReferenceError: hello is not defined
    at file:///Users/patriciodunstan/Documents/develop/js/curso-ecmascript6/src/es10/tempCodeRunnerFile.js:2:5
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)*/

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}

/* output
Esto es un error
ahora se puede personalizar la salida del error*/
