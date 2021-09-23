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

/*3. Cantidad de caracteres
Cuando el comando ejecutado sea:

    > node fs length

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el nombre y la cantidad total de caracteres que contiene. Y al final una linea mas que indique la cantidad total de caracteres que suman todos los valores anteriores. Ejemplo:

    a.txt 564 chars
    b.txt 36 chars
    c.txt 756 chars
    d.txt 1464 chars
    e.txt 947 chars
    f.txt 193 chars

    3960 chars */

/*4. Busqueda de texto
Cuando el comando ejecutado sea:

    > node fs search "ipsum"

Deberá mostrar en pantalla los nombres de los archivos que contengan en cualquier parte del texto la palabra indicada en el ultimo parametro.  */


const fs = require('fs');//requiero modulo

let parametros = process.argv.splice(2);//saco los parametros


//para cada uno de los comandos
switch (parametros[0]) { //me fijo q parametro ingreso
   
    case "count":
        fs.readdir('./files',(error,data) => {
            console.log(data.length);
        }) 
            
            break;

        case "size":
            fs.readdir('./files',(error,data) => {
                data.forEach(data => {
                        console.log(data + " - " );
                });
            }) 

            break;


        case "length":

            fs.writeFile("summary.txt","\n", (error,data)=>{//creo el txt
                
                if(error) {
                    
                    return console.log('error: ' + error);

                } else { //si no hay error
                    fs.readdir('./files', (error, files) => { //leo cada archivo
                        files.map(x => { 
                            var data = fs.readFileSync('./files' + "/" + x,'utf8');
                            let caracteres = data.length;
                            fs.appendFile("summary.txt", x + "  " + caracteres + "  characteres" + "\n", err => {if(err) throw err} )
                        })
                    });
                }
            })

            break;


        case "search":
            
            console.log("busqueda de la palabra: " + parametros[1]);
           
            fs.readdir('./files', (err, files) => {
                files.map(x => {
                    let data = fs.readFileSync('./files'+"/"+ x,'utf8');
                
                    if(data.includes(parametros[1])){
                        console.log(x);
                    }
                    
                })
            });


            break;

    default: //comando que no exista
        console.log("El comando: " + parametros[0] + " no se reconoce. Los comandos validos son: count, size, length, search");
        
            break;
}