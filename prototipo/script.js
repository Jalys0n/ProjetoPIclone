function gerarsenha(){ 

     let nome = document.forms["formulario"]["nome"].value;
     let cpf = document.forms["formulario"]["cpfInput"].value;
     let atendimento = document.forms["formulario"]["atendimento"].value;
     let prioridade = document.forms["formulario"]["prioridade"].value;
     // 02.maio: recupera o valor da variável.



     
          //funcao para passar a pagina senha-gerada
          document.getElementById("formulario").addEventListener("submit", function(event){

               event.preventDefault();
               if (nome != "" && cpf !="" && atendimento !="" && prioridade !=""){
                    //Deu certo
               
                    window.location.href = "senha-gerada.html";
               }     
     
          });  

}

//funcao onsubmit
function validardados(){
     let nome = document.forms["formulario"]["nome"].value;
     let cpf = document.forms["formulario"]["cpfInput"].value;
     let atendimento = document.forms["formulario"]["atendimento"].value;
     let prioridade = document.forms["formulario"]["prioridade"].value;

     

     if (nome == ""||cpf==""||atendimento==""||prioridade==""){
          alert("Campo obrigatório!    ");         
          return false;

     } else{
          return true;

     }


     
}


window.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('cpfInput');

  cpfInput.addEventListener('input', function() {
    formatarCPF(cpfInput);
  });
});

function formatarCPF(input) {
  let cpf = input.value;

  // Remove todos os caracteres que não são números
  cpf = cpf.replace(/\D/g, '');

  // Aplica a formatação com pontos e traços
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  // Define o valor formatado no campo de input
  input.value = cpf;
}

//tentando pegar data;
function mostrardata(){

     mes = new Array ("janeiro","fevereiro","março","abril", "maio","junho","julho","agosto","setembro","outubro","novembro","dezembro")
     const data = new Date();
     const anoatual = data.getFullYear();
     const mesatual = data.getMonth();
     const diaatual = data.getDate(); 
     const hora = data.getHours();
     const min = data.getMinutes();
     document.getElementById("dataaqui").innerHTML = `${diaatual} de ${mes[mesatual]} de ${anoatual}, ${hora}:${min}.`;
}
//senha gerada aleatoriamente na pagina senha-gerada.html
function senhaGerada(){
     let senhaGerada = Math.random().toString(36).slice(-5).toUpperCase();

     document.getElementById("senhaGerada").innerHTML = 
     senhaGerada;

}