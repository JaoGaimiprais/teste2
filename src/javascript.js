    // Elementos
    let h3 = document.createElement("h3")
    let email = document.createElement("p")
    let insta = document.createElement("p")
    let zapp = document.createElement("p")

    // Textos
    let contatos = document.createTextNode("Contatos")
    let gmail = document.createTextNode("Email: joaopcsoficial@gmail.com")
    let instagram = document.createTextNode("Instragram: JoaoPcs")
    let whats = document.createTextNode("Whatsapp: 997048627")

    // Selencionando Tags
    let footer = document.querySelector("#rodape")

    // Add Filhos
    h3.appendChild(contatos)
    email.appendChild(gmail)
    insta.appendChild(instagram)
    zapp.appendChild(whats)
    footer.appendChild(h3)
    footer.appendChild(email)
    footer.appendChild(insta)
    footer.appendChild(zapp)