const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.img');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('cick', () => {


        desativarBotaoSelecionado();

        botao.classList.add('selecionado');

        botao.classList.add('selecionado');

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
    botoesCarrossel[indice].classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}