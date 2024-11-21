export default class Password {
  static new(size: number = 15): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especiais = "!@#$%&*";

    const groups = [minusculas, maiusculas, numeros, especiais];
    const password = [];

    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
