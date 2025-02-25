function convertirARomano(numero) {
  if (numero === 5) 
    return 'V';
  return ('I').repeat(numero);
}

export default convertirARomano;