function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)){
        if(chute.toLowerCase() === "game over") {
            fimDeJogo();
        } else {
            checarCor(chute);
        }
        elementoChute.innerHTML += "<div>Valor inválido</div>";
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

function fimDeJogo() {
    document.body.innerHTML = `
                <h2>Fim de jogo</h2>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;
}

function checarCor(chute) {
    if(chute.toLowerCase() === "amarelo") {
        document.body.style.backgroundColor = "yellow";
    } else if(chute.toLowerCase() === "vermelho") {
        document.body.style.backgroundColor = "red";
    } else if(chute.toLowerCase() === "azul") {
        document.body.style.backgroundColor = "blue";
    } else if(chute.toLowerCase() === "verde") {
        document.body.style.backgroundColor = "green";
    } else if(chute.toLowerCase() === "preto") {
        document.body.style.backgroundColor = "black";
    } else if(chute.toLowerCase() === "branco") {
        document.body.style.backgroundColor = "white";
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
});