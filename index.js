const textArea = document.querySelector(".textoPrincipal");
const mensaje= document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".textoPrincipal").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador==0){
        alert("Solo son permitidas minusculas y sin acentos")
        location.reload();
        return true;
    }
}



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
        
    }
    return stringEncriptada;


}
function btnDesencriptar(){
    const textoEncriptado= desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value="";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
        
    }
    return stringDesencriptada;

}

    function btncopiar(){
        let texto = document.getElementById('mensaje');
        texto.ariaSelected();
        texto.setSelectionRange(0, 99999);
                
        }
    

