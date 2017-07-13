var datos = [1, 2, 3, 4 , 5, 6];
var contador = 0;
  function resul (dato){
  contador += dato;
}

datos.forEach(resul);

console.log(contador);
