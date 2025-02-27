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
  it("deberia retornar X", () => {
    expect(convertirARomano(10)).toEqual("X");
  });
  it("deberia retornar XL", () => {
    expect(convertirARomano(40)).toEqual("XL");
  });
  it("deberia retornar XXXIX", () => {
    expect(convertirARomano(39)).toEqual("XXXIX");
  });
  it("deberia retornar XLIV", () => {
    expect(convertirARomano(44)).toEqual("XLIV");
  });
  it("deberia retornar L", () => {
    expect(convertirARomano(50)).toEqual("L");
  });
  it("deberia retornar C", () => {
    expect(convertirARomano(100)).toEqual("C");
  });
  it("deberia retornar XC", () => {
    expect(convertirARomano(90)).toEqual("XC");
  });
  it("deberia retornar D", () => {
    expect(convertirARomano(500)).toEqual("D");
  });
  it("deberia retornar CD", () => {
    expect(convertirARomano(400)).toEqual("CD");
  });
  it("deberia retornar M", () => {
    expect(convertirARomano(1000)).toEqual("M");
  });
  it("deberia retornar CM", () => {
    expect(convertirARomano(900)).toEqual("CM");
  });

});
