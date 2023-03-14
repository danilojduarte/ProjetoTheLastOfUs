const botoesCarrossel = document.querySelectorAll('.botao');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('cick', () => {

        console.log(indice);

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remover('ativa');

        

    })
})