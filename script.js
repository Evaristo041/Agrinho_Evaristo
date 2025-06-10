const perguntas = [
    {
        id: 1,
        texto: "Você costuma desligar as luzes ao sair de um cômodo?",
        name: "pergunta1"
    },
    {
        id: 2,
        texto: "Você reutiliza embalagens e potes sempre que possível?",
        name: "pergunta2"
    },
    {
        id: 3,
        texto: "Você costuma usar transporte coletivo ou bicicleta?",
        name: "pergunta3"
    },
    {
        id: 4,
        texto: "Você toma banhos com duração inferior a 10 minutos?",
        name: "pergunta4"
    }
];

function criarFormulario() {
    const form = document.getElementById('form-simulador');
    
    perguntas.forEach(pergunta => {
        const divPergunta = document.createElement('div');
        divPergunta.className = 'mb-3 p-3 bg-white rounded-2';
        
        const perguntaText = document.createElement('p');
        perguntaText.className = 'fw-bold';
        perguntaText.textContent = `${pergunta.id}. ${pergunta.texto}`;
        divPergunta.appendChild(perguntaText);

        const divSim = document.createElement('div');
        divSim.className = 'form-check';
        const inputSim = document.createElement('input');
        inputSim.className = 'form-check-input';
        inputSim.type = 'radio';
        inputSim.name = pergunta.name;
        inputSim.id = `${pergunta.name}-sim`;
        inputSim.value = 'positivo';
        const labelSim = document.createElement('label');
        labelSim.className = 'form-check-label';
        labelSim.htmlFor = `${pergunta.name}-sim`;
        labelSim.textContent = 'Sim';
        divSim.appendChild(inputSim);
        divSim.appendChild(labelSim);
        divPergunta.appendChild(divSim);

        const divNao = document.createElement('div');
        divNao.className = 'form-check';
        const inputNao = document.createElement('input');
        inputNao.className = 'form-check-input';
        inputNao.type = 'radio';
        inputNao.name = pergunta.name;
        inputNao.id = `${pergunta.name}-nao`;
        inputNao.value = 'negativo';
        const labelNao = document.createElement('label');
        labelNao.className = 'form-check-label';
        labelNao.htmlFor = `${pergunta.name}-nao`;
        labelNao.textContent = 'Não';
        divNao.appendChild(inputNao);
        divNao.appendChild(labelNao);
        divPergunta.appendChild(divNao);
        
        form.appendChild(divPergunta);
    });

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'text-center mt-4';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-success px-4 py-2';
    button.textContent = 'Calcular Meu Resultado';
    button.addEventListener('click', calcularImpacto);
    buttonDiv.appendChild(button);
    form.appendChild(buttonDiv);
}

function calcularImpacto() {
    const respostas = document.querySelectorAll('input[type=radio]:checked');
    let pontos = 0;

    respostas.forEach(resposta => {
        if (resposta.value === 'positivo') pontos++;
    });

    const resultado = document.getElementById('resultado');
    
    if (pontos === perguntas.length) {
        resultado.innerHTML = '🌱 Parabéns! Você é um exemplo de consumo consciente!';
        resultado.className = 'mt-4 p-3 text-center fw-bold fs-5 text-success';
    } else if (pontos >= perguntas.length / 2) {
        resultado.innerHTML = '👍 Bom trabalho! Você está no caminho certo!';
        resultado.className = 'mt-4 p-3 text-center fw-bold fs-5 text-primary';
    } else {
        resultado.innerHTML = '⚠️ Hora de repensar seus hábitos! Pequenas mudanças fazem diferença.';
        resultado.className = 'mt-4 p-3 text-center fw-bold fs-5 text-warning';
    }
}

document.addEventListener('DOMContentLoaded', criarFormulario);