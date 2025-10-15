//Primeiro código TypeScript!
console.clear()
let nome: string = "Samuel";
let idade: number = 20;
let programador: boolean = true;

console.log("=== PRIMEIRO PROGRAMA ===");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`É programador? ${programador}`);

// Vamos testar alguns cálculos
let anoNascimento: number = 2025 - idade;
console.log(`Você nasceu em ${anoNascimento}`);

// Array de hobbies
let hobbies: string[] = ["Jogar basquete", "programar", "Ouvir música"];
console.log(`Você tem ${hobbies.length} hobbies, e eles são:`, hobbies);

// === OBJETO SIMPLES ===
let pessoa = {
    nome: "Samuel",
    idade: 17,
    programador: true,
    cidade: "São Paulo"
};
console.log("\n=== OBJETO COMPLETO ===");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Cidade:", pessoa.cidade);
console.log("Objeto inteiro:", pessoa);


//======= FUNÇÕES SIMPLES ==========
function criarApresentacao(nome: string, idade: number): string {
    return `Meu nome é ${nome} e ${idade} anos`
}

function verificarIdade(idade: number): boolean {
    return idade >= 18;
}

function listarHobbies(hobbies: string[]): void {
    console.log("\n=== MEUS HOBBIES ===");
    for (let i = 0; i < hobbies.length; i++) {
        console.log(`${i + 1}. ${hobbies[i]}`);
    }
}

console.log(criarApresentacao("Matheus", 27));

let maioridade = verificarIdade(27);
// idade = 17 → maioridade = false
console.log(`Sou maior de idade? ${maioridade ? "Sim" : "Não"}`);
// Mostra: "É maior de idade? Não"

listarHobbies(hobbies);
// hobbies = ["Jogar basquete", "programar", "Ouvir música"]
// Mostra cada hobby numerado