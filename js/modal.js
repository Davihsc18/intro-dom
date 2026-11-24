// Capturando elementos
const modal = document.querySelector("#modal-inscricao");
const btnmodal = document.querySelector("#modal-fechar");

window.addEventListener("load", function () {
  setTimeout(function () {
    modal.showModal();
  }, 3000);
});

modal.showModal();

// Fechando modal ao clicar no button
btnmodal.addEventListener("click", function () {
  modal.close();
});

// Fechando modal ao clicar no fundo
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});
