function playSom(idElementAudio) {
  document.querySelector(idElementAudio).play()
}

const listDeTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listDeTeclas.length; i++) {
  const tecla = listDeTeclas[i]
  const idAudio = `#som_${tecla.classList[1]}`
  tecla.onclick = function () {
    playSom(idAudio)
  }
}
