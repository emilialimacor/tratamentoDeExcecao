function calcular() {
    try {
        // Obtém os números informados pelo usuário
        var numero1 = parseFloat(prompt("Informe o primeiro número:"));
        var numero2 = parseFloat(prompt("Informe o segundo número:"));

        // Verifica se os números são válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Informe números válidos.");
        }

        // Realiza a operação desejada (por exemplo, a soma)
        var resultado = numero1 + numero2;

        // Exibe o resultado na página HTML
        document.body.innerHTML += "<p>Resultado: " + resultado + "</p>";
    } catch (erro) {
        // Trata a exceção e exibe uma mensagem de erro na página HTML
        document.body.innerHTML += "<p>Erro: " + erro.message + "</p>";
    } finally {
        // Executa o código, independentemente de ocorrer uma exceção ou não
        console.log("Executando o bloco finally.");
    }
}

// Chama a função calcular ao carregar a página (apenas para exemplo)
calcular();