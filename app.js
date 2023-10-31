const fundo = document.querySelector(".fundo");
const loginlink = document.querySelector(".login-link");
const registrarlink = document.querySelector(".registro-link");
const btn = document.querySelector (".btn");
const iconeEncerrar = document.querySelector (".icone-encerrar");

registrarlink.addEventListener ("click", () =>{
    fundo.classList.add('active');
    //console.log("Botao clicado");
});

loginlink.addEventListener("click", () =>{
    fundo.classList.remove('active');
    //console.log("Botao clicado");
});

btn.addEventListener("click", () =>{
    
    fundo.classList.add('active-btn');
    //console.log("Botao clicado");
});

iconeEncerrar.addEventListener("click", () =>{
    fundo.classList.remove ('active-btn');
    //console.log("Botao clicado");
});