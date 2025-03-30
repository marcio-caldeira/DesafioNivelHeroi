function classificarHeroi() {
    let nome = document.getElementById("nome").value;
    let xp = parseFloat(document.getElementById("xp").value);
    let nivel;

    if (!nome || isNaN(xp) || xp < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um nome válido e um número positivo para XP.";
        return;
    }

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    document.getElementById("resultado").innerText = `O Herói de nome ${nome} está no nível de ${nivel}`;
}
