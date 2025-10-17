let numero1: number = 5;
let numero2: number = 2;

function somar(): string {
    return `A soma dos dois números é ${numero1 + numero2}.`;
}

function multiplicar(): string {
    return `A multiplicação dos dois números é ${numero1 * numero2}.`;
}

function subtração(): string {
    return `A subtração dos dois números é ${numero1 - numero2}.`;
}

function divisão(): string {
    return `A divisão dos dois números é ${numero1 / numero2}.`;
}

console.log(somar());
console.log(multiplicar());
console.log(subtração());
console.log(divisão());