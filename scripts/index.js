const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

/* toggle: vai tirar ou adicionar uma classe */
button.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});

/* Se a página foi rolada (se o valor de pageYOffset é maior que 0), a classe active é adicionada ao elemento navbar */
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add("active");
  return navbar.classList.remove("active");
});
