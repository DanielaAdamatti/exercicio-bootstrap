// Parte 2) Sabe aquele formulário todo poderoso que vocês fizeram em bootstrap? A segunda tarefa consiste em realizar a validação do formulário considerando os seguintes critérios:

// O nome não pode ser deixado em branco nem ser preenchido com espaços;
// O email não pode ser deixado em branco e deve conter o caractere @ ;
// O telefone só poderá conter dígitos;
// A mensagem deve ter pelo menos 10 caracteres;
// O formulário só poderá ser submetido quando todos os campos estiverem preenchidos corretamente, em caso contrário deve-se exibir uma mensagem de erro;

//alert("Js funcionando");

const nome = document.querySelector("#exampleFormControlInput1");
const email = document.querySelector("#exampleFormControlInput2");
const telefone = document.querySelector("#exampleFormControlInput3");
const mensagem = document.querySelector("#exampleFormControlTextarea4");

const botao = document.querySelector('.btn-envio');

botao.addEventListener('click',function(evento){
    evento.preventDefault();
    //alert("botão funcionando");
    if (nome.value === undefined ||
        nome.value === null||
        nome.value.trim() === "" ||
        nome.value.length<0){
        nome.focus(); //Campo errado ganha foco
        alert('Preencha o campo nome corretamente');
        return false; //não deixa submeter
    } else if (email.value === undefined ||
        email.value === null||
        email.value.trim() === "" ||
        email.value.indexOf('@')===-1){
        email.focus(); //Campo errado ganha foco
        alert('Preencha o campo email corretamente');
        return false; //não deixa submeter
    } else if (telefone.value === undefined ||
        telefone.value === null||
        telefone.value.trim() === "" ||
        telefone.value.length<11){
        telefone.focus(); //Campo errado ganha foco
        alert('Preencha o campo telefone corretamente');
        return false; //não deixa submeter
    } else if (mensagem.value === undefined ||
        mensagem.value === null||
        mensagem.value.trim() === "" ||
        mensagem.value.length<10){
        mensagem.focus(); //Campo errado ganha foco
        alert('Preencha o campo de mensagem corretamente');
        return false; //não deixa submeter
    }
    document.querySelector('form').submit();
    alert('Mensagem enviada com sucesso! :D');
})


