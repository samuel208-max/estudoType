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


// Função 1: ADICIONAR LIVRO
// Recebe: título, autor e número de páginas
// Cria um novo livro com esses dados
// O livro novo começa como "não lido"
// Adiciona esse livro na lista de livros
function AdicionarLivro(titulo:string, autor:string, paginas:number): void {
    const novoLivro: Livro = {
        titulo: titulo,
        autor: autor,
        paginas: paginas,
        lido: false
    }
    meusLivros.push(novoLivro);
    console.log(`✅ Livro "${titulo}" adicionado com sucesso!`);
}


// Função 2: MARCAR LIVRO COMO LIDO
// Recebe: título de um livro
// Encontra esse livro na lista
// Muda o status dele para "lido"
function marcarComoLido(titulo: string): void {
    const livro = meusLivros.find(livro => livro.titulo === titulo);   
    if (livro) {
        livro.lido = true;
        console.log(`✅ "${titulo}" marcado como lido!`);
    } else {
        console.log(`❌ Livro "${titulo}" não encontrado.`);
    }
}


// Função 3: LISTAR TODOS OS LIVROS
// Mostra na tela todos os livros da lista
// Para cada livro, mostra: título, autor, páginas
// Mostra ✅ se foi lido, ❌ se não foi lido
function listarLivros(): void {
    console.log("\n📚 MINHA BIBLIOTECA:");
    console.log("=" .repeat(40));
    
    meusLivros.forEach((livro, index) => {
        const status = livro.lido ? "✅ LIDO" : "❌ NÃO LIDO";
        console.log(`${index + 1}. ${livro.titulo}`);
        console.log(`   Autor: ${livro.autor}`);
        console.log(`   Páginas: ${livro.paginas}`);
        console.log(`   Status: ${status}`);
        console.log("---");
    });
}


// Função 4: CALCULAR PÁGINAS LIDAS
// Calcula o total de páginas dos livros que JÁ FORAM LIDOS
function totalPaginasLidas(): number {
    let total = 0;
    
    for (let livro of meusLivros) {
        if (livro.lido) {
            total += livro.paginas;
        }
    }
    
    return total;
}


// Função 5: Buscar livros por autor
function buscarLivrosPorAutor(autor: string): void {
    const livrosDoAutor = meusLivros.filter(livro => livro.autor === autor);
    
    if (livrosDoAutor.length > 0) {
        console.log(`\n📚 LIVROS DE ${autor.toUpperCase()}:`);
        console.log("=".repeat(40));
        
        livrosDoAutor.forEach((livro, index) => {
            const status = livro.lido ? "✅ LIDO" : "❌ NÃO LIDO";
            console.log(`${index + 1}. ${livro.titulo}`);
            console.log(`   Páginas: ${livro.paginas}`);
            console.log(`   Status: ${status}`);
            console.log("---");
        });
    } else {
        console.log(`❌ Nenhum livro encontrado do autor "${autor}"`);
    }
}

buscarLivrosPorAutor("Rick Riordan")


// 🧪 TESTANDO O SISTEMA
console.log("=== SISTEMA DE BIBLIOTECA ===");

// Lista livros iniciais
listarLivros();

// Mostra páginas lidas
console.log(`\n📖 Total de páginas lidas: ${totalPaginasLidas()}`);

// Adiciona um novo livro
AdicionarLivro("Percy Jackson e o Ladrão de Raios", "Rick Riordan", 377);

// Marca um livro como lido
marcarComoLido("O Senhor dos Anéis");

// Lista novamente para ver as mudanças
listarLivros();

// Mostra páginas lidas atualizadas
console.log(`\n📖 Total de páginas lidas: ${totalPaginasLidas()}`);