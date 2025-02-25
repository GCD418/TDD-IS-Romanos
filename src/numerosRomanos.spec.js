import convertirARomano from "./numerosRomanos";

describe("Convertir a romanos", () => {
  it("deberia retornar I", () => {
    expect(convertirARomano(1)).toEqual("I");
  });
  it("deberia retornar II", () => {
    expect(convertirARomano(2)).toEqual("II");
  });
  it("deberia retornar V", () => {
    expect(convertirARomano(5)).toEqual("V");
  });

});
