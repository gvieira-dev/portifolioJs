function enviarEmail(event){
    event.preventDefault();
    
    const nome=document.getElementById('nome').value.trim()
    const email=document.getElementById('email').value.trim()
    const mensagem=document.getElementById('mensagem').value.trim()

    if (nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return
    } 

    if(!email.includes("@") ||!email.includes(".") ){
        alert("Digite um email válidod")
        return
    }

    const destinatario = "exemplo@gmail.com"

    const assunto=encodeURIComponent("Contato pelo portfólio");
    const corpo = encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );

    const link= `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    window.location.href = link;

    alert("Abrindo aplicativo de email...")

    document.getElementById('formulario').reset();
}

//Fundo de estrelas

function criarEstrela(){
    const estrela = document.createElement("div");
    estrela.classList.add("estrela-cadente");

    estrela.style.top = Math.random() * window.innerHeight + "px";
    estrela.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(estrela);

    estrela.style.animation = "estrela 1s linear forwards";

    setTimeout(() => {
        estrela.remove();
    }, 1000);
}

// intervalo aleatório
setInterval(() => {
    criarEstrela();
}, Math.random() * 5000 + 3000);