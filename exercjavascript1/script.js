// script.js - Conversor de Texto: Primeira Letra Maiúscula

// Função principal que converte a primeira letra de cada palavra para maiúscula
function converterParaTitleCase(frase) {
    // Verifica se a frase não está vazia
    if (!frase || frase.trim() === '') {
        return '';
    }
    
    // Divide a frase em palavras, converte cada palavra e junta novamente
    return frase
        .toLowerCase() // Primeiro converte tudo para minúscula
        .split(' ') // Divide em palavras usando espaço como separador
        .map(palavra => {
            // Para cada palavra, capitaliza a primeira letra
            if (palavra.length === 0) return palavra; // Trata palavras vazias
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        })
        .join(' '); // Junta as palavras novamente com espaço
}

// Função alternativa mais robusta que lida com múltiplos espaços e caracteres especiais
function converterParaTitleCaseAvancado(frase) {
    if (!frase || frase.trim() === '') {
        return '';
    }
    
    return frase
        .toLowerCase()
        .replace(/\b\w/g, letra => letra.toUpperCase()); // Usa regex para capitalizar
}

// Função que será executada quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Conversor de Texto carregado com sucesso!');
    
    // Selecionando elementos do HTML
    const inputFrase = document.getElementById('fraseInput');
    const botaoConverter = document.getElementById('converterBtn');
    const elementoResultado = document.getElementById('resultado');
    
    // Função para mostrar o resultado na tela
    function mostrarResultado(fraseOriginal, fraseConvertida) {
        if (fraseConvertida === '') {
            elementoResultado.innerHTML = `
                <div style="color: #ff6b6b; font-weight: bold;">
                    ⚠️ Por favor, digite uma frase válida!
                </div>
            `;
        } else {
            elementoResultado.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <strong style="color: #555;">Frase Original:</strong><br>
                    <span style="color: #666; font-style: italic;">"${fraseOriginal}"</span>
                </div>
                <div>
                    <strong style="color: #4CAF50;">Resultado:</strong><br>
                    <span style="color: #2e7d32; font-size: 18px; font-weight: bold;">"${fraseConvertida}"</span>
                </div>
            `;
        }
    }
    
    // Evento do botão converter
    botaoConverter.addEventListener('click', function() {
        const frase = inputFrase.value;
        const fraseConvertida = converterParaTitleCase(frase);
        mostrarResultado(frase, fraseConvertida);
        
        // Log no console para debug
        console.log(`Original: "${frase}"`);
        console.log(`Convertida: "${fraseConvertida}"`);
    });
    
    // Permite converter pressionando Enter no campo de input
    inputFrase.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            botaoConverter.click();
        }
    });
    
    // Limpa o resultado quando o usuário começar a digitar novamente
    inputFrase.addEventListener('input', function() {
        if (elementoResultado.innerHTML !== '') {
            // Só limpa se já há resultado mostrado
            elementoResultado.innerHTML = '';
        }
    });
});

// Função de exemplo para testar no console
function testarConversor() {
    const exemplosFrases = [
        "olá mundo javascript é incrível",
        "ESTE TEXTO ESTÁ EM MAIÚSCULA",
        "este texto está em minúscula",
        "MiStUrAdO cOm VáRiAs CaPiTaLiZaÇõEs",
        "javascript html css python",
        ""
    ];
    
    console.log('=== TESTE DO CONVERSOR ===');
    exemplosFrases.forEach((frase, index) => {
        const resultado = converterParaTitleCase(frase);
        console.log(`${index + 1}. "${frase}" → "${resultado}"`);
    });
}

// Executa teste automático (opcional - pode comentar)
console.log('Para testar o conversor no console, digite: testarConversor()');
