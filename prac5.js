var datos = [1, 2, 3, 4 , 5, 6];
contador = 0;

// for ( i=0; i< datos.length ; i++){
//   contador += datos[i];
// }

datos.forEach(function(dato){
  contador += dato;
});

console.log(contador);
