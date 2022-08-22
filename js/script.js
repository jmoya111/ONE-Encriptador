var textoE = document.querySelector("#textoEncriptado");
var textoD = document.querySelector("#textoDesencriptado");
var rectanguloTexto = document.querySelector("#rectanguloTexto");
var munieco = document.querySelector("#munieco");


function encriptar(){
    var mensaje = textoE.value;
    var reemplazo = mensaje.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    textoD.value = reemplazo;
    rectanguloTexto.style.display = "none";
    validar();
    
}
   
function validar(){
    if (textoE.value.match(/^[a-z ]*$/)) {
} else{
    return Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Solo letras minúsculas y sin acentos por favor.',
        showConfirmButton: false,
        width: '20%',
        color:'black',
        iconColor:'#2841719b',
        timer: 1800
        
      })
}
}

 function desencriptar(){
    var mensaje = textoE.value;
    var  reemplazo = mensaje.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    textoD.value = reemplazo;
}

function copy(){
    var contenido = textoD;
    contenido.select();
    document.execCommand("cut");

     
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Texto copiado correctamente',
        showConfirmButton: false,
        width: '20%',
        color:'black',
        iconColor:'#2841719b',
        timer: 1000
        
      })

    }
