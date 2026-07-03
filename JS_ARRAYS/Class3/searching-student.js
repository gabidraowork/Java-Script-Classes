const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDealunoEMedias = [alunos,medias];

function showNameGrade(aluno) {

    if (listaDealunoEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);
        
        cost [alunos, medias] = listaDealunoEMedias;

        const index = alunos.indexOf(aluno);

        const nota = medias[index];

        console.log(`O aluno ${aluno} tem média de ${nota}`)
        
    } else {
        console.log("Aluno não encontrado!");
    }
}

showNameGrade("João");

