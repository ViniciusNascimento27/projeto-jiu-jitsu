function criaLogin(){
    let usuario, pass
    usuario = document.getElementById("user").value
    pass = document.getElementById("senha").value
    localStorage.setItem("user", usuario)
    localStorage.setItem("senha", pass)
    alert("Seu login foi gravado com sucesso!")
}

function fazerLogin(){
    let usuario, pass
    usuario = document.getElementById("user2").value
    pass = document.getElementById("senha2").value
    let usuLS = localStorage.getItem("user")
    let passLS = localStorage.getItem("senha")
    if(usuario == usuLS && pass == passLS){
        alert("Login efetuado com sucesso!")
    }else{
        alert("Usuário ou senha incorretos!")
    }
}
