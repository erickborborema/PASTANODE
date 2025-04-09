const fs = required("fs")

fs.writeFileSync("mensagem.txt", "Oi, criei esse arquivo pelo node")
console.log("Arquivo criado com sucesso!")