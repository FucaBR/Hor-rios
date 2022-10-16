function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var cumprimento = document.getElementById('cumprimento')
    var data = new Date() 
    var hora = data.getHours()
    var back = document.getElementById('background')
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //Bom Dia 
        imagem.src = './img/pexels-gagandeep-1000054 (1) (1).jpg'
        cumprimento.innerHTML = 'Bom Dia!'
        document.body.style.backgroundColor = '#813e37'
        back.style.backgroundColor = '#af5f49'
        back.style.boxShadow = '2px 3px 10px #62282c'
    }else if(hora >= 12 && hora <= 18){
        //Boa Tarde
        imagem.src = './img/Tarde.jpg'
        cumprimento.innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = '#005469'
        back.style.backgroundColor = '#a8d0ff'
    }else {
        //Boa Noite
        imagem.src = './img/pexels-reynaldo-brigworkz-brigantty-771883.jpg'
        cumprimento.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = '#161615'
        back.style.backgroundColor = '#314147'
        back.style.boxShadow = '0px 0px 0px'
    }
}