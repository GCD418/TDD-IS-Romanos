const numerosRomanos = {
  'XL': 40,
  'X': 10,
  'V': 5,
  'IV': 4,
  'I': 1,
};
function convertirARomano(numero) {
  let romano = '';
  for (let simbolo in numerosRomanos) {
    let valor = numerosRomanos[simbolo];
    while (numero >= valor) {
      romano += simbolo;
      numero -= valor;
    }
  }
  return romano;
}

export default convertirARomano;