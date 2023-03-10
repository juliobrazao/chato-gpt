var question = document.querySelector("#question");
var button = document.querySelector("button");
var response = document.querySelector("#response");
var display = document.querySelector("#display");

button.addEventListener("click", () => {
    if (question.value == "") {
        setTimeout(() => { RenderResponseNG("Faça uma pergunta decente, meu filho!") }, 1000);
    } else {
        setTimeout(() => { RenderResponseOK(question.value)}, 1000);
        
    }
})

const RenderResponseNG = (responseText) => {
    response.innerHTML = `<div class='alert alert-warning'>${responseText}</div>`;
    setTimeout(() => {
        location.href="./";
    }, 2000);
}

const RenderResponseOK = (responseText) => {
    button.setAttribute("disabled", "disabled");
    button.innerHTML = "Buscando respostas para a sua pergunta...";
    display.innerHTML = "<strong>Pergunta: </strong>" + responseText;

    setTimeout(() => {
        button.removeAttribute("disabled");
        button.innerHTML = "Tentar novamente";
        button.addEventListener("click", function(){
            location.href = "./";
        });
        response.innerHTML = `<div class='alert alert-warning'>${GeraResposta()}</div>`;
    }, 3000);
}

const GeraResposta = () => {
    return ListaDeRespostas[GenerateRandom()].txt;
}


const GenerateRandom = () => {
    return Math.floor(Math.random() * 4) + 1;
}

const ListaDeRespostas = [
    {
        id: 1,
        txt: "Essa pergunta é muito fácil, faz uma mais dificil!"
    },
    {
        id: 2,
        txt: "Se tu que é o especialista não sabe... Pq eu deveria saber?"
    },
    {
        id: 3,
        txt: "Eu não vou responder pq você perguntou de uma maneira burra!"
    },
    {
        id: 4,
        txt: "Essa questão eu vou deixar pro meu ministro, ele que é o especialista!"
    },
    {
        id: 5,
        txt: "Você não pode estar fazendo essa pergunta de maneira séria. Pode voltar pro maternal!"
    }
]

