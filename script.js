// Funcionalidade: Modo Escuro
const btnTheme = document.getElementById('toggle-theme');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Funcionalidade: Verificador
function checarNoticia() {
    const input = document.getElementById('newsInput').value;
    const feedback = document.getElementById('feedback');
    
    if(input.length < 15) {
        feedback.innerText = "Por favor, digite uma manchete completa para análise.";
        feedback.style.color = "#ef4444";
    } else {
        feedback.innerText = "Verificado! Lembre-se: sempre compare com fontes de notícias confiáveis.";
        feedback.style.color = "#10b981";
    }
}
