const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.img');

botoesCarrossel.forEach((botao, indice) => {
    // passo 2 - dar um jeito de identificar o clique do usuário no botão
	botao.addEventListener('click', () => {
		
		// passo 3 - desmarcar o botão selecionado anterior
		desativarBotaoSelecionado();
		
		// passo 4 - marcar o botão clicado como se estivesse selecionado
		botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa anterior
		esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativo');
    botoesCarrossel[indice].classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativo');
    imagemAtiva.classList.remove('ativo');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}