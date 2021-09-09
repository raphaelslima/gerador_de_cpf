import GeraCPF from './modules/geraCPF'
import './assets/css/style.css'
;(function () {
  const geraCpfInicial = new GeraCPF()
  const cpfInicial = document.querySelector('.cpf-gerado')
  cpfInicial.innerHTML = geraCpfInicial.geraNovoCpf()
})()

document.addEventListener('click', e => {
  const el = e.target
  if (el.tagName === 'A') {
    const cpfGerado = document.querySelector('.cpf-gerado')
    const geraCpf = new GeraCPF()
    cpfGerado.innerHTML = geraCpf.geraNovoCpf()
  }
})
