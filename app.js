const sonidos=document.getElementById('sonidos');
document,addEventListener("keydown", function (envento){
    if (envento.keydo==32){
        sonidos.innerHTML +='<audio src="sonido.mp3" autoplay></audio>'
    }
})