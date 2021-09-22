/*EJERCICIOS*/


/*1. ### Resultado en pantalla*/

/*Cuando se ingrese por consola el siguiente parámetro:

    > node fs count

Debe mostrar en consola la cantidad total de archivos existentes en la carpeta files*/



/*2. ### Tamaño por archivo ###

Cuando el comando ejecutado sea:

    > node fs size

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el nombre y el peso del archivo en kb. Ejemplo:
    a.txt 564 kb
    b.txt 36 kb
    c.txt 756 kb
    d.txt 1464 kb
    e.txt 947 kb
    f.txt 193 kb
*/

const fs = require('fs');

let parametros = process.argv.splice(2);

switch (parametros[0]) {
    case "count":
        fs.readdir('./files',(error,data) => {
            console.log(data.length);
        }) 
        break;

    default:
        console.log("El comando: " + parametros[0] + " no se reconoce. Los comandos validos son: count, size, length, search");
        break;
}