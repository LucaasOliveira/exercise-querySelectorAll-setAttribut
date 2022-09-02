/* 
1. Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.
*/

const card = document.querySelectorAll(".card");
card.forEach((element) => element.setAttribute("style", "background-color: #e16e0e;"));

/* 
2. Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.
3. Modifique o texto dos títulos nos cards para "Meu card".
*/

const title = document.querySelectorAll(".titulo-card");
title.forEach((element) => {
    element.setAttribute("style", "color: #2b385b; margin-top: 15px");
    element.innerText = "Meu Card";
});

/*
4. Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.
5. Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript".
*/

const description = document.querySelectorAll(".descricao-card");
description.forEach((element) => {
    element.innerText = "Descrição modificada pelo JavaScript";
    element.setAttribute("style", "color: #ffffff; margin: 30px auto; font-size: 15px;");
});

/* 6. Capture, armazene e manipule todos os elementos de classe
"botao-editar".Modifique o estilo desses elementos para que fique
semelhante a imagem. 
8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!".*/


const btnEdit = document.querySelectorAll(".botao-editar");
btnEdit.forEach((element) => {
    element.setAttribute("style", "color: #ffffff; background-color: green; padding: 10px; border-radius: 8px; border: none;");
    element.addEventListener("click", editarCard)
});

function editarCard() {
    alert("Clicou em Editar!");
};

/* 
7. Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem.
9. Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!".
*/

const btnDelete = document.querySelectorAll(".botao-apagar");
btnDelete.forEach((element) => {
    element.setAttribute("style", "color: #ffffff; background-color: red; padding: 10px; border-radius: 8px; border: none;");
    element.addEventListener("click", apagarCard)
});

function apagarCard() {
    const validation = confirm("Você tem certeza que deseja excluir o card?");

    validation ? alert("Confirmado!") : alert("Cancelou!");
};
