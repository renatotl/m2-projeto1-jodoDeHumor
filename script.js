window.onload = function() {
    alert("Olá mundo do JavaScript para Web");
};

//acessando o DOM
//O QUERYSELECTORALL vai transformar a variável em um arrey, mas só em CLASS
const fotoJs = document.querySelector('#foto1');//imagem 1// captura o botão pelo ID
const nomeJs = document.querySelector('#nome');//texto 1
const situacao = document.querySelector('#situacao');//texto 2
let botaoJs = document.querySelector('#botao');//botão1


// Adiciona um evento de click no botão capturado e assim que for clicado, 
//adicionando um evendo clicl no botao uma aero function
botaoJs.addEventListener("click", () => { 
    if(botaoJs.value == 'um'){//value capta o valor do botao
        fotoJs.src ="assets/img/fotoEllie2.png";
        nomeJs.innerText = "Ellie está tensa";//innerText adiciona um texto
        situacao.innerText = 'Você está falando sério que nunca jogou!'//innerTEXT adiciona um texto
        botaoJs.value = 'dois';// o valor do botão foi atualizado para 2
    }else if(botaoJs.value == 'dois'){
        foto1.src = "assets/img/fotoEllie3.png";
        nome.innerText = "Concentrada";//innerText adiciona um texto
        situacao.innerText = 'Você vai ver'//innerTEXT adiciona um texto
        botaoJs.value = 'tres';// o valor do botão foi atualizado para 3
    }else if( botaoJs.value == 'tres')    {
        fotoJs.src = "assets/img/fotoEllie4.jpg";
        nomeJs.innerText = "um recomeço";//innerText adiciona um texto
        situacao.innerText = 'Experimento jogue'//innerTEXT adiciona um texto
        botaoJs.value = 'zero';
    }else if(botaoJs.value == 'zero'){
        fotoJs.src = "assets/img/foto1.png";
        nomeJs.innerText = "Ellie do bem";//innerText adiciona um texto
        situacao.innerText = 'Querendo fazer amizade'//innerTEXT adiciona um texto
        botaoJs.value = 'um';
    }
});

