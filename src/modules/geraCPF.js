import ValidaCPF from './validaCPF'

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatado(cpf) {
    return (
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      cpf.slice(9, 11)
    )
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.rand()
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos)
    const novoCPF = cpfSemDigitos + digito1 + digito2
    return this.formatado(novoCPF)
  }
}
