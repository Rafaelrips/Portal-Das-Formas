// Função para calcular a área do Triangulo
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('triangulo-form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtém os valores da base e altura inseridos pelo usuário
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);

        // Calcula a área do triângulo (Área = (Base * Altura) / 2)
        const area = (base * altura) / 2;

        // Exibe o resultado na página
        resultado.textContent = `A área do triângulo é ${area.toFixed(2)} unidades quadradas.`;
    });
});




// Função para calcular a área do Retângulo
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('retangulo-form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtém os valores da base e altura inseridos pelo usuário
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);

        // Calcula a área do Retângulo (Área = (Base * Altura) 
        const area = (base * altura) ;

        // Exibe o resultado na página
        resultado.textContent = `A área do retangulo é ${area} unidades quadradas.`;
    });
});





//calcular area do circulo
document.addEventListener('DOMContentLoaded', function() {
    // Função para calcular a área do círculo
    function calcularArea() {
        // Selecionar o input pelo ID
        var raioInput = document.getElementById('raio');
        var resultadoElement = document.getElementById('resultado');

        // Verificar se os elementos foram encontrados
        if (!raioInput || !resultadoElement) {
            console.error('Elementos não encontrados no DOM.');
            return;
        }

        // Obter o valor do raio do círculo do input
        var raio = parseFloat(raioInput.value);

        // Verificar se o valor é válido
        if (isNaN(raio) || raio <= 0) {
            alert('Por favor, insira um valor válido para o raio do círculo.');
            return;
        }

        // Calcular a área do círculo
        var area = Math.PI * Math.pow(raio, 2);

        // Exibir o resultado
        resultadoElement.innerText = 'A área do círculo é: ' + area.toFixed(2);
    }

    // Associar a função ao evento de clique do botão
    var botaoCalcular = document.getElementById('calcularBotao');
    if (botaoCalcular) {
        botaoCalcular.addEventListener('click', calcularArea);
    }
});





// Função para calcular a área da coroa do círculo
function calcularAreaCoroa() {
    const raioExterno = parseFloat(document.getElementById('raioExterno').value);
    const raioInterno = parseFloat(document.getElementById('raioInterno').value);

    if (raioExterno <= raioInterno) {
        document.getElementById('resultado').textContent = "O raio externo deve ser maior que o raio interno.";
    } else {
        const areaExterna = Math.PI * Math.pow(raioExterno, 2);
        const areaInterna = Math.PI * Math.pow(raioInterno, 2);
        const areaDaCoroa = areaExterna - areaInterna;
        document.getElementById('resultado').textContent = "A área da coroa é: " + areaDaCoroa.toFixed(2) + " unidades quadradas";
    }
};




// calculo hexágono
function calcularArea() {
    // Obter o valor do lado do hexágono a partir do campo de entrada
    var lado = parseFloat(document.getElementById("lado").value);
    
    // Verificar se o valor é válido
    if (!isNaN(lado)) {
        // Calcular a área do hexágono regular
        var area = (lado * lado * 3 * Math.sqrt(3)) / 2;        
        // Exibir o resultado
        document.getElementById("resultado").textContent = "A área do Hexágono Regular é: " + area.toFixed(2) + " unidades quadradas.";
    } else {
        alert("Por favor, insira um valor válido para o lado do hexágono.");
    }
};





// calcular trapézio
document.addEventListener('DOMContentLoaded', function() {
    // Função para calcular a área do trapezio
    function calcularArea() {
        // Selecionar os inputs pelos IDs
        var base1Input = document.getElementById('base1');
        var base2Input = document.getElementById('base2');
        var alturaInput = document.getElementById('altura');
        var resultadoElement = document.getElementById('resultado');

        // Verificar se os elementos foram encontrados
        if (!base1Input || !base2Input || !alturaInput || !resultadoElement) {
            console.error('Elementos não encontrados no DOM.');
            return;
        }

        // Obter os valores das bases e altura do trapezio dos inputs
        var base1 = parseFloat(base1Input.value);
        var base2 = parseFloat(base2Input.value);
        var altura = parseFloat(alturaInput.value);

        // Verificar se os valores são válidos
        if (isNaN(base1) || isNaN(base2) || isNaN(altura) || base1 <= 0 || base2 <= 0 || altura <= 0) {
            alert('Por favor, insira valores válidos para as bases e altura do trapézio.');
            return;
        }

        // Calcular a área do trapezio
        var area = ((base1 + base2) * altura) / 2;

        // Exibir o resultado
        resultadoElement.innerText = 'A área do trapézio é: ' + area.toFixed(2);
    }

    // Associar a função ao evento de clique do botão
    var botaoCalcular = document.getElementById('calcularBotao');
    if (botaoCalcular) {
        botaoCalcular.addEventListener('click', calcularArea);
    }
});




  //calcular poligono
  function calculateArea() {
    const sides = parseInt(document.getElementById('sides').value);
  
    if (isNaN(sides) || sides < 3) {
      alert('Escolha um número válido de lados (pelo menos 3).');
      return;
    }
  
    const sideLength = 100; // You can change this value as needed
    const apothem = sideLength / (2 * Math.tan(Math.PI / sides));
  
    const area = (sides * sideLength * apothem) / 2;
    document.getElementById('result').textContent = `A área do polígono é: ${area.toFixed(2)}`;
  };






//area do quadrado
  function calcularArea() {
    // Obtenha o valor do lado do quadrado do input
    var lado = parseFloat(document.getElementById('lado').value);

    // Verifique se o valor é válido
    if (isNaN(lado) || lado <= 0) {
        alert('Por favor, insira um valor válido para o lado do quadrado.');
        return;
    }

    // Calcule a área do quadrado
    var area = lado * lado;

    // Exiba o resultado
    document.getElementById('resultado').innerText = 'A área do quadrado é: ' + area.toFixed(2);
};

  
  

    
