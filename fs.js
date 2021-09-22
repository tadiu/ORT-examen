/*nota: no me quedo claro el tema del script de que haya distintos comandos, yo lo tomo en cuenta como que seria distintos archivos y cada uno es un node de su correspondiente archiv
porque si es hacer un script de cada uno no recuerdo que hayamos hecho comandos*/

const fs = require('fs');

/*EJERCICIOS*/


/*1. ### Resultado en pantalla*/

/*Cuando se ingrese por consola el siguiente parámetro:

    > node fs count

Debe mostrar en consola la cantidad total de archivos existentes en la carpeta files*/

fs.readdir('./files',(error,data) => {
    console.log(data.length);
}) 

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

