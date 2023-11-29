
const box = document.querySelector('.box');
let position = 250;
const speed = 2; // Ajuste a velocidade da animação

function animate() {
    // Mova a caixa horizontalmente
    position += speed;
    box.style.left = position + 'px';

    // Se a caixa sair da tela, reinicie a animação
    if (position > window.innerWidth) {
        position = -50;
    }

    // Solicita uma nova animação
    requestAnimationFrame(animate);
}

animate(); // Inicie a animação
