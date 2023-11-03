/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso 
contrario debe mandar un mensaje de error y volver a solicitar los datos.*/

// Define a celsius como la entrada de la variable dada por el usuario
let celsius = prompt('Ingrese la temperatura en Celsius ');
//lo convierte en numero para que no vaya a imprimir en forma de cadena 
celsius=parseFloat(celsius);
//Se verifica que el usuario ingrese un número
    if (isNaN(celsius)){
        console.log(`Ingrese un número válido`);
    }else{
//se hacen las operaciones 
    let fahrenheit = (celsius*1.8)+32;
    let kelvin = celsius+273.15;
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
    }
