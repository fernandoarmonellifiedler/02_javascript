function carregar() {
    var titulo = document.querySelector('div#titulo')
    //var imgarea = document.querySelector('div#foto')
    var img = document.querySelector('img#imagem')
    var agora = new Date()
    var hora = agora.getHours()// + ":" + agora.getMinutes()
    //var hora = 8
    titulo.innerHTML = `Agora são as ${hora} hs`
    if (hora >= 0 && hora < 6) {
        //madrugada
        img.src = 'imagemnoite.png'
        document.body.style.background = 'black'
    } else if (hora >= 6 && hora <= 12) {
        //manha
        img.src = 'imagemmanha.png'
        document.body.style.background = '#fce592'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'imagemtarde.png'
        document.body.style.background = '#fd6d02'
    } else {
        //noite
        img.src = 'imagemnoite.png'
        document.body.style.background = 'black'
    }
}





