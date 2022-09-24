var button = document.querySelector("button")

function text(valor) {
    document.getElementById("txencriptado").innerHTML=valor
    
}

const textoFinal=document.querySelector(".txfinal")

function encriptado(){
    txencriptado=document.getElementById("frase").value;
    txencriptado=txencriptado.replace(/a/gi, "ai")
    txencriptado=txencriptado.replace(/e/gi, "enter")
    txencriptado=txencriptado.replace(/i/gi, "imes")
    txencriptado=txencriptado.replace(/o/gi, "ober")
    txencriptado=txencriptado.replace(/u/gi, "ufat")
    txencriptado=txencriptado.replace(/aimes/gi, "ai")
    txencriptado=txencriptado.replace(/á/gi, "ái")
    txencriptado=txencriptado.replace(/é/gi, "énter")
    txencriptado=txencriptado.replace(/í/gi, "ímes")
    txencriptado=txencriptado.replace(/ó/gi, "óber")
    txencriptado=txencriptado.replace(/ú/gi, "úfat")
    document.getElementById("txfinal").innerHTML=txencriptado
}


function desencriptado(){
    txdesencriptado=document.getElementById("frase").value;
    txdesencriptado=txdesencriptado.replace(/ai/gi, "a")
    txdesencriptado=txdesencriptado.replace(/enter/gi, "e")
    txdesencriptado=txdesencriptado.replace(/imes/gi, "i")
    txdesencriptado=txdesencriptado.replace(/ober/gi, "o")
    txdesencriptado=txdesencriptado.replace(/ufat/gi, "u")
    txdesencriptado=txdesencriptado.replace(/ái/gi, "á")
    txdesencriptado=txdesencriptado.replace(/énter/gi, "é")
    txdesencriptado=txdesencriptado.replace(/ímes/gi, "í")
    txdesencriptado=txdesencriptado.replace(/óber/gi, "ó")
    txdesencriptado=txdesencriptado.replace(/úfat/gi, "ú")
    document.getElementById("txfinal").innerHTML=txdesencriptado
}

function copiartextofinal(){
    txfinal.select();
    document.execCommand('copy');
}

/*
<section>
    <div class="texto">
        <textarea name="" onkeyup="text(this.value)" id="" cols="50" rows="10" placeholder="Ingrese el texto aqui"></textarea>
    </div>
    <hr>
    <h1>Encriptado</h1>
    <div id="txencriptado">
    </div>
</section>
*/