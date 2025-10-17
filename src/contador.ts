let contador: number = 0;

console.log("Contador inicial: 0")

function Implementar(): void {
    contador++;
    console.log(`Contador: ${contador}`);
}

function Decrementar(): void {
    contador--;
    console.log(`Contador: ${contador}`);
}

function Resetar(): void {
    contador = 0;
    console.log(`Contador: ${contador}`);
}

Implementar(); 
Implementar(); 
Implementar(); 
Implementar(); 
Decrementar();
Resetar();