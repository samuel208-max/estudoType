let contador: number = 0;

console.log("Contador inicial: 0");

function Incrementar(valor: number = 1): void {
    contador += valor;
    console.log(`Contador: ${contador}`);
}

function Decrementar(valor: number = 1): void {
    contador -= valor;
    console.log(`Contador: ${contador}`);
}

function Resetar(): void {
    contador = 0;
    console.log(`Contador: ${contador}`);
}

function DefinirValor(novoValor: number): void {
    contador = novoValor;
    console.log(`Contador definido para: ${contador}`);
}

// Testes
console.log("=== TESTES CONTADOR MELHORADO ===");
Incrementar();        // +1 → Contador: 1
Incrementar(5);       // +5 → Contador: 6  
Decrementar(2);       // -2 → Contador: 4
Decrementar();        // -1 → Contador: 3
DefinirValor(10);     // Define → Contador: 10
Resetar();            // Zera → Contador: 0