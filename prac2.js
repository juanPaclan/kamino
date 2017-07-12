var datos = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
contador = 0;

for ( i=0; i< datos.length ; i++){
  if ((datos[i]%2) === 0 ){
  contador += datos[i];
  console.log(datos[i]);
  }

}
console.log(contador);
