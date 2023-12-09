// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplication");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-table span");



// Funções
const createTable = (number, multiplicationNumber) => {

    multiplicationTable.innerHTML = "";// estou limpando o html


    for (let i = 1; i <= multiplicationNumber; i++) {

        const result = number * i;

        const template = `<div class="row"> 
                <div class="operation"> ${number} x ${i} = </div>
                <div class="result"> ${result} </div>
              </div>`;

        const parser = new DOMParser();// nos permite converter o const template acima para html      

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};



// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();//quando clicar no botão enviar ele não carrega a página

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber){
        return;
    } 
    
    createTable(multiplicationNumber, multiplicatorNumber)

});