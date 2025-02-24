import convertirARomano from "./numerosRomanos";

describe("Convertir a romanos", () => {
  it("deberia retornar 1", () => {
    expect(convertirARomano(1)).toEqual("I");
  });
});
