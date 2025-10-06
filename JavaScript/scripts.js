document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll("#palco .genero-btn");

  botoes.forEach(botao => {
    botao.style.backgroundColor = "rgb(14, 118, 187)";
    botao.style.color = "#ffffff";

    botao.addEventListener("mouseover", () => {
      botao.style.backgroundColor = "#ffffff";
      botao.style.color = "#000000";
    });
 
    botao.addEventListener("mouseout", () => {
      botao.style.backgroundColor = "rgb(14, 118, 187)";
      botao.style.color = "#ffffff";
    });
  });
});