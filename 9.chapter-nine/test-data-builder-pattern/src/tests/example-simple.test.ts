import { UserBuilder } from "../builder/UserBuilder";
import { assert, expect } from "chai";

describe("Test Data Builder Example", () => {
  it("[CT-0001] - Deve validar a criação de objeto pessoa.", () => {
    let person1;
    person1 = new UserBuilder().build();
    expect(person1.name).to.be.a("string").and.not
      .empty; /** Verifica se é uma string e se não está vazia */
    assert.isNumber(person1.age); /** Verifica se é um número */
    assert.isTrue(person1.age > 0); /** Verifica se a idade é maior que zero */
    expect(person1.email).to.be.a("string").and.not
      .empty; /** Verifica se é uma string e se não está vazia */
  });

  it("[CT-0002] - Deve validar a criação de objeto pessoa com nome 'João Júnior'.", () => {
    let person2;
    person2 = new UserBuilder().withName("João Júnior").build();
    assert.equal(
      person2.name,
      "João Júnior",
      "O nome é diferente do esperado."
    ); /** Verifica se o nome é igual a João Júnior */
  });

  it("[CT-0002] - Deve validar a criação de objeto pessoa com idade igual '18'.", () => {
    let person3;
    person3 = new UserBuilder().withAge(18).build();
    assert.equal(
      person3.age,
      18,
      "A idade é diferente do esperado."
    ); /** Verifica se a idade é igual a 18 */
  });
});
