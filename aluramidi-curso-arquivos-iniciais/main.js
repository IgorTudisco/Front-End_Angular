function playSom(seletorAudio) {
  if (seletorAudio == '') {
    console.log('Digite um seletor ou elemento válido')
  } else {
    const element = document.querySelector(seletorAudio)
    if (element && element.localName === 'audio') {
      element.play()
    } else {
      console.log('Elemento ou seletor não encontrado: ' + element?.localName)
    }
  }
}

const listDeTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listDeTeclas.length; i++) {
  const tecla = listDeTeclas[i]
  const idAudio = `#som_${tecla.classList[1]}`
  tecla.onclick = function () {
    playSom(idAudio)
  }

  tecla.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      tecla.classList.add('ativa')
    }
    console.log(event.code)
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
