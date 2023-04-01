// CRIANDO O EFEITO DO MENU HAMBURGUER
const hamburger = document.querySelector(".toggle-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }))


// fazendo a mascara do telefone no input do contato
var telefone = document.getElementById('telefone');
telefone.addEventListener('input', function(evt) {
  var valor = telefone.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.slice(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  telefone.value = valor;
});

// 