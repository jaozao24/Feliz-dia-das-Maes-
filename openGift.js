let giftBtn = document.querySelector('.gift')

let openGift = (ev) => {
    let btn = ev.currentTarget
    let shadowDiv = document.querySelector('.shadowDiv')
    let main = document.querySelector('.shadowMom')
    let prg1 = document.createElement('p')
    let prg2 = document.createElement('p')
    let prg3 = document.createElement('p')

    prg1.classList.add('prg')
    prg2.classList.add('prg')
    prg3.classList.add('prg')
    
    prg1.innerText = 'Mamãe querida, quero que saiba que te amo muito, você é a maior benção na minha vida e nunca estaria onde estou sem você.'

    prg2.innerText = 'Muito Obrigado por tudo que ja fez por mim, só sou o que sou por resultado de todo cuidado e carinho que me deu a vida toda, por isso sou eternamente grato.'

    prg3.innerHTML = 'Desculpa todos os muitos vacilos que cometo, te amo demais e vou me esforçar pra te orgulhar!&#x1F496'

    main.classList.remove('shadowMom')
    main.classList.add('mom')

    btn.remove()
    shadowDiv.append(prg1, prg2, prg3)
}

giftBtn.addEventListener('click', openGift)