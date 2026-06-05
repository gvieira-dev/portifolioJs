function enviarEmail(event){
    // Impede o recarregamento padrão do formulário
    event.preventDefault();
    
    // Captura os valores digitados pelo usuário e remove espaços extras
    const nome=document.getElementById('nome').value.trim()
    const email=document.getElementById('email').value.trim()
    const mensagem=document.getElementById('mensagem').value.trim()

    // Verifica se todos os campos foram preenchidos
    // Se algum estiver vazio, impede o envio
    if (nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return
    } 

    // Validação simples do e-mail
    // Garante que o formato básico de e-mail exista
    if(!email.includes("@") ||!email.includes(".") ){
        alert("Digite um email válidod")
        return
    }

    // Define o destinatário fixo do formulário
    const destinatario = "exemplo@gmail.com"

    // Cria o assunto da mensagem e codifica para URL
    const assunto=encodeURIComponent("Contato pelo portfólio");

    // Monta o corpo do e-mail com os dados do formulário
    const corpo = encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );

    // Monta o link usando protocolo mailto para abrir o cliente de e-mail
    const link= `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    // Redireciona o usuário para o aplicativo de e-mail
    window.location.href = link;

    // Mostra mensagem informando que o e-mail será aberto
    alert("Abrindo aplicativo de email...")

    // Limpa os campos do formulário após o envio
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
