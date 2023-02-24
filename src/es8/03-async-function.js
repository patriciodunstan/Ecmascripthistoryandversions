const fnAsync = () => {
    return new Promise((resolve, reject) => {
    (true)//ternario de if y despues se utiliza el signo de ?
        ?setTimeout(() => resolve('AsynC!!'), 2000)//setTimeout palabra reservada para esperar respuesta, 2000 = 2 seg (el tiempo se utiliza en milisegundos)
        : reject(new Error('Error!'));// new Error es una instancia para manejar errores.
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFn();
console.log('after');