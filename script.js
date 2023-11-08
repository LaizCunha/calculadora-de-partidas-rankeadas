function onFormSubmit(evt) {
    evt.preventDefault()

    const form = evt.target;
    const formData = new FormData(form);

    let nome = formData.get('nome');
    let vitorias = parseInt(formData.get('vitorias'));
    let derrotas = parseInt(formData.get('derrotas'));
    let saldoVitorias = calcularRanking(vitorias,derrotas);
    let nivel = calcularNivel(saldoVitorias);;

    document.querySelector('#resultado').style.display = 'block';

    document.querySelector('#mensagem').innerHTML =`O Herói de ${nome} tem de saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`;

};

function calcularRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
};

function calcularNivel(saldoVitorias) {
    let nivel = "";

    if (saldoVitorias < 10) {
        nivel = "Ferro";     
    } else if (saldoVitorias >= 10 && saldoVitorias < 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 20 && saldoVitorias < 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 50 && saldoVitorias < 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 80 && saldoVitorias < 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 90 && saldoVitorias < 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Indefinido";
    }

    return nivel;
};