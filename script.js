const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Verifica se o elemento atual e o próximo realmente existem na tela
        if (atual && document.getElementById(proximoPasso)) {
            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        }
    });
});
