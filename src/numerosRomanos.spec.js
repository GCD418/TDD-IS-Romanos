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
  it("deberia retornar IV", () => {
    expect(convertirARomano(4)).toEqual("IV");
  });
  it("deberia retornar VI", () => {
    expect(convertirARomano(6)).toEqual("VI");
  });
  it("deberia retornar VII", () => {
    expect(convertirARomano(7)).toEqual("VII");
  });


});
