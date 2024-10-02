const simBtn = document.getElementById('sim');
const naoBtn = document.getElementById('nao');
const pergunta = document.getElementById('pergunta');
const resposta = document.getElementById('resposta');

simBtn.addEventListener('click', () => {
    pergunta.style.display = 'none';
    simBtn.style.display = 'none';
    naoBtn.style.display = 'none';
    resposta.textContent = 'Eu te amo, coração!';
});

naoBtn.addEventListener('click', () => {
    const naoBtnRect = naoBtn.getBoundingClientRect();
    const simBtnRect = simBtn.getBoundingClientRect();
    const newX = simBtnRect.left;
    const newY = simBtnRect.top;
    naoBtn.style.position = 'absolute';
    naoBtn.style.left = `${newX}px`;
    naoBtn.style.top = `${newY}px`;
    simBtn.style.position = 'absolute';
    simBtn.style.left = `${naoBtnRect.left}px`;
    simBtn.style.top = `${naoBtnRect.top}px`;
});