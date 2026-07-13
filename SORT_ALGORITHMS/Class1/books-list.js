const titles = ["JavaScript", "PHP", "Java", "Elixir", "Go", "Python", "Ruby", "C++", "Rust", "TypeScript", "C#", "Kotlin"];
const books = [];

// Vamos gerar 10.000 livros aleatórios
for (let i = 1; i <= 10000; i++) {
    // Escolhe um título aleatório da lista acima e adiciona o número do ID dele
    const randomTitle = titles[Math.floor(Math.random() * titles.length)] + ` Vol. ${i}`;
    
    // Gera um preço aleatório entre 10 e 150
    const randomPrice = Math.floor(Math.random() * 140) + 10; 

    books.push({
        title: randomTitle,
        price: randomPrice
    });
}

module.exports = books;