function idade(idadeComDecimal: number): string {
    const idade = Math.floor(idadeComDecimal);

    if (idade < 0) {
        return 'ESTE NÚMERO É INVALIDO, DIGITE UMA IDADE IGUAL OU MAIOR QUE 0';
    } 
    else if (idade >= 0 && idade <= 2) {
        return 'Você é um bebê'
    }
    else if (idade >= 3 && idade <= 12) {
        return 'Você é uma criança'
    } 
    else if (idade >= 13 && idade <= 17) {
        return 'Você é um adolescente'
    }
    else if (idade >= 18 && idade <= 59) {
        return 'Você é um adulto'
    }
    else {
        return 'Você é um idoso'
    }
}

console.log(idade(60));