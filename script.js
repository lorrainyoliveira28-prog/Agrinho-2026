const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent =
        "A sustentabilidade no campo garante alimentos, preserva a natureza e constrói um futuro melhor para todos!";
});
