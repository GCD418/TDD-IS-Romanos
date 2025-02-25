function convertirARomano(numero) {
  if (numero === 5) 
    return 'V';
  if(numero === 4)
    return 'IV';
  return ('I').repeat(numero);
}

export default convertirARomano;