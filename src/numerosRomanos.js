function convertirARomano(numero) {
  if (numero >= 5) 
    return 'V' + convertirARomano(numero - 5);
  if(numero === 4)
    return 'IV';
  return ('I').repeat(numero);
}

export default convertirARomano;