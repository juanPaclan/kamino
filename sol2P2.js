var datos = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
var contador = 0;
  function resul (dato){
    if ((dato%2) === 0){
      console.log('Los numeros sumados son: '+ dato)
      contador += dato;
    }
}

datos.forEach(resul);
console.log(contador);
