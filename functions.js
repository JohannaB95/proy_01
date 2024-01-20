// Define la función sumar (add)
//Se declara la función add y que tiene dos parámetros a y b.
function add(a,b) { 
    //Se retorna el resultado de la suma entre a y b.
    return a + b;      
}

//Define la función restar (substract)
//Se declara la función substract y que tiene dos parámetros a y b.
function substract(a,b) {
    //Se retorna el resultado de la resta entre a y b.
    return a - b;
}

//Define la función multiplicar(multiply)
//Se declara la función multiply y que tiene dos parámetros a y b.
function multiply(a,b) {
    //Se retorna el resultado de la multiplicación entre a y b.
    return a * b;
}

//Define la función dividir(divide)
//Se declara la función divide y que tiene dos parámetros a y b.
function divide(a,b) {
    //Se utiliza el condicional if para verificar el valor de a y b, si a y b son iguales a 0
    if (b == 0 && a == 0) {
        //Se retorna un mensaje indicando que no se puede dividir entre 0
        return "Error: no se puede dividir entre cero"
    //Y si b es igual a 0
    } else if (b == 0) {
        //Se retorna un mensaje indicando que no se puede dividir entre 0
        return "Error: no se puede dividir entre cero" 
    }
        /*Si no se cumple ninguna de las dos condiciones anteriores, se retorna el resultado de la división entre
        a y b.*/
        return a / b;
    }

//Se exportan las funciones al módulo app para que se ejecuten se acuerdo a los argumentos dados
exports.add = add;
exports.substract =substract;
exports.multiply = multiply;
exports.divide = divide;