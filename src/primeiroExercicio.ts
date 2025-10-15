// Função 1: ADICIONAR LIVRO
// Recebe: título, autor e número de páginas
// Cria um novo livro com esses dados
// O livro novo começa como "não lido"
// Adiciona esse livro na lista de livros


// Função 2: MARCAR LIVRO COMO LIDO
// Recebe: título de um livro
// Encontra esse livro na lista
// Muda o status dele para "lido"


// Função 3: LISTAR TODOS OS LIVROS
// Mostra na tela todos os livros da lista
// Para cada livro, mostra: título, autor, páginas
// Mostra ✅ se foi lido, ❌ se não foi lido


// Função 4: CALCULAR PÁGINAS LIDAS
// Calcula o total de páginas dos livros que JÁ FORAM LIDOS

// Retorna esse número total

type Livro = {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
};

let meusLivros: Livro[] = [
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        paginas: 263, 
        lido: false
    },
    {
        titulo: "Magnus Chase e a espada do verão",
        autor: "Rick Riordan",
        paginas: 448, 
        lido: true
    },
    {
        titulo: "O Senhor dos Anéis",
        autor: "J. R. R. Tolkien",
        paginas: 608, 
        lido: false
    },
    {
        titulo: "O diario de um banana 1",
        autor: "Jeffy Kinney",
        paginas: 224, 
        lido: true
    },
    {
        titulo: "Vinland Saga",
        autor: "Makoto Yukimura",
        paginas: 464, 
        lido: true
    }
]