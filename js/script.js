window.addEventListener('load', start)

function start() {
    console.log('página carregada')
    changeRange()
}

function changeRange() {
    var red = parseInt(document.getElementById('sliderVermelho').value)
    var green = parseInt(document.getElementById('sliderVerde').value)
    var blue = parseInt(document.getElementById('sliderAzul').value)
    var cxCores = document.querySelector('.cxCores')
    
    var color = '#' + hex(red) + hex(green) + hex(blue)

    cxCores.style.backgroundColor = color
    document.getElementById('hex-label').innerText = color

    document.getElementById('inputVermelho').value = red
    document.getElementById('inputVerde').value = green
    document.getElementById('inputAzul').value = blue

    if (red < 100 && green < 100 && blue < 100) {
        cxCores.style.color = 'white'
    } else {
        cxCores.style.color = 'black'
    }
    
}

function hex(v) {
    var hex = v.toString(16)
    if (v < 16) {
        hex = '0' + hex
    }

    return hex
}

start()