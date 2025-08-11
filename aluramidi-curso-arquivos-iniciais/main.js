function playSom(idElementAudio) {
  document.querySelector(idElementAudio).play()
}

const listDeTeclas = document.querySelectorAll('.tecla')

let cont = 0

while (cont < listDeTeclas.length) {
  const tecla = listDeTeclas[cont]
  const idAudio = `#som_${tecla.classList[1]}`

  tecla.onclick = function () {
    playSom(idAudio)
  }
  cont++
}
