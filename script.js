const botaoDark = document.getElementById("darkModeBtn");

botaoDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function mostrarAlerta(){
    alert(
        "Deepfakes podem ser usados para golpes, manipulação política e desinformação."
    );
}

function respostaCorreta(){
    document.getElementById("resultadoQuiz").innerHTML =
    "✅ Correto! Sempre verifique antes de compartilhar.";
}

function respostaErrada(){
    document.getElementById("resultadoQuiz").innerHTML =
    "❌ Errado! Compartilhar sem verificar aumenta a desinformação.";
}

let contador1 = 0;
let contador2 = 0;

const animacao = setInterval(() => {

    if(contador1 < 1000){
        contador1 += 10;
        document.getElementById("contador1").innerText = contador1;
    }

    if(contador2 < 500){
        contador2 += 5;
        document.getElementById("contador2").innerText = contador2;
    }

    if(contador1 >= 1000 && contador2 >= 500){
        clearInterval(animacao);
    }

},20);

document
.getElementById("formulario")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    if(nome.trim() === ""){
        alert("Digite seu nome.");
        return;
    }

    document.getElementById("mensagem").innerHTML =
    `Obrigado, ${nome}! Você assumiu o compromisso de combater a desinformação.`;

});
