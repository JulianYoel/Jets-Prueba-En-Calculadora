
//Mostrar en pantalla el valor del botón apretado
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//función botón borrar
function borrar(){
    document.getElementById('pantalla').value = '';
}

//función igual
function igual(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado;
    
}
