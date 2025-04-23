const guias = document.querySelectorAll(".guia-btn");
const conteudos = document.querySelectorAll(".conteudo-guia");

guias.forEach(guia => {
    guia.addEventListener("click", () => {
        // Remove a classe ativo de todas as guias
        guias.forEach(g => g.classList.remove("ativo"))
        // Adiciona a classe ativo na guia clicada
        guia.classList.add("ativo")

        // Esconde todos os conteúdos
        conteudos.forEach(conteudo => conteudo.style.display = "none")

        // Mostra o conteúdo correspondente
        const guiaID = guia.getAttribute("data-guia");
    document.getElementById(`guia-${guiaID}`).style.display = "block"
        })
    })

    let intervaloCronometro
    let segundosConometro = 0
    let cronometroRodando = false
    
    const displayCronomentro = document.getElementById("cronometro")
    const botaoIniciarCronometro = document.getElementById("iniciarCronometro")
    const botaoPausarCronometro = document.getElementById("pausarCronometro")
    const botaoResetarCronometro = document.getElementById("resetarCronometro")
    
    function atualizarDisplayCronometro() {
        const horas = Math.floor(segundosConometro / 3600)
        const minutos = Math.floor((segundosCronometro % 3600) / 60)
        const segundos = Math.floor((segundosCronometro % 60))
    
        displayCronomentro.textContent = ${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}
    }
    
    function iniciarCronometro() {
        if(!cronometroRodando) {
            cronometroRodando = trueintervaloCronometro = setInterval(() => {
                segundosCronometro++
                atualizarDisplayCronometro()
    
            }, 1000)
        }
    }
    function pausarCronometro() {
        pausarCronometro()
        segundosCronometro = 0
        atualizarDisplayCronometro()
    }
    let intervaloContagem
    let segundoContagem = 0 
    let contagemRodando = 0
    
    const displayContagem = document.getElementById("contagem")
    const entradaHoras = document.getElementById("horas")
    const entradaMinutos = document.getElementById("minutos")
    const entradaSegunda = document.getElementById("segundos")
    const botaoIniciarContagem = document.getElementById("iniciarContagem")
    const botaoPausarContagem = document.getElementById("pausarContagem")
    const botaoResetarContagem = document.getElementById("resetarContagem")
    
    function atualizarDisplayContagem() {
        const horas = Math.floor(segundoContagem / 3600)
        const minutos = Math.floor((segundoContagem % 3600) / 60)
    
        displayContagem.textContent = ${String(horas).padStart(2, "0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}
    }