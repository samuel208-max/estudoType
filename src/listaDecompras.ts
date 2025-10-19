//  O QUE FAZER:
// FUNÇÕES:
// adicionarItem(item: string) - Adiciona um item na lista     
// listarItens() - Mostra todos os itens numerados
// limparLista() - Remove todos os itens
// VOCÊ PRECISA:
// 1 array para guardar os itens
// 3 funções
// for para mostrar itens numerados

let lista: string[] = ["Pão", "Açucar", "Suco de laranja natural"];

function adicionarItem(item: string): void {
    lista.push(item);
    console.log(`Item ${item} adicionado na lista de Compras`);
}

function listarItens(): void {
    console.log("================ LISTA DE ITENS DE COMPRA ===========")
    if (lista.length === 0) {
        console.log("A lista de itens está vazia, adicione itens para conseguir vê-lá")
    } else {
        lista.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }
}

function limparLista() {
    lista.length = 0;
    console.log("Lista limpada com sucesso")
}

// TESTE SUGERIDO para ver tudo funcionando:
console.log("=== TESTANDO LISTA DE COMPRAS ===");
// Lista itens iniciais
listarItens();
// Adiciona novo item  
adicionarItem("Queijo");
// Lista novamente (agora com 4 itens)
listarItens();
// Limpa a lista
limparLista();
// Lista vazia
listarItens();