//pegar botões
const botoes = document.querySelectorAll(".botao");

//clicar no botãoo do personagem mostrar as informações do personagem
const personagem = document.querySelectorAll(".personagem");

//adicionando a classe "selecionado" no botao quando oo usuário clicar
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //verificar se já temm um botao "selecionado", se sim, remover a classe dele
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
