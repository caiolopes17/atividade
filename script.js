function jogar(escolhaUsuario) {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;

    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === 1 && escolhaComputador === 3) ||
        (escolhaUsuario === 2 && escolhaComputador === 1) ||
        (escolhaUsuario === 3 && escolhaComputador === 2)
    ) {
        resultado = "Você venceu! 🎉";
    } else {
        resultado = "Você perdeu! 😢";
    }

    document.getElementById("resultado").innerText = 
        `Você escolheu ${opcoes[escolhaUsuario - 1]} | Computador escolheu ${opcoes[escolhaComputador - 1]}. ${resultado}`;
}
