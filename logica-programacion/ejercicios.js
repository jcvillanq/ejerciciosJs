/********************************** ******************************** */ 
/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */
/********************************** ******************************** */ 

// opcion1 
const counterWords = (words="") => {

    if (!words==""){
        console.log(`La cadena que ingresaste tiene ${words.length} caracteres`);

    }else{
        console.log("No has introducido una cadena");
    }
}
counterWords("hola mundo")

// opcion2

const miFuncion = (words) =>{
    let i = 0
    while(words[i] !== undefined){
        i++
    }
    return "la cadena tiene: "+i+"caracteres";
}
console.log(miFuncion("hola mundo"));

//opcion3 resolucion mas correcta 


function contarCaracteres(cadena=""){

    if(!cadena){
        console.warn("NO ingresaste una cadena ")
    }else{
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres `)
    }
}

contarCaracteres("Hola Mundo")

// En forma ternaria 

const contarletras=(cadena="") => 
    (!cadena)
      ? console.warn("NO ingresaste una cadena ")
      :console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres `);










/*********************************************************************** */ 
/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
/*********************************************************************** */ 


// en forma ternaria 

const shortWord = (word="",longitud=undefined) => 
(!word)
? console.warn("No ingresaste una cadena de texto")
:(longitud === undefined)
  ? console.warn("No ingresaste la longitud para recortar el texto")
  : console.info(word.slice(0,longitud));

shortWord("hola mundo", 4);
shortWord("HOLA MUNDO");



/* ************************************************************************* */
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
/* ************************************************************************* */


const stringToArray = (word="",separador=undefined) => 
(!word)
? console.warn("No ingresaste una cadena de texto")
:(separador === undefined)
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(word.split(separador));

    stringToArray("lorem asd gasdas asd", " ");








/* ************************************************************************* */
    /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
 /* ************************************************************************* */


 const repetirTexto = (text="", veces=undefined) => {
     if (!text) return console.warn("No ingresaste una cadena de texto");   
     
     if (veces === undefined ) return console.warn("No ingresaste el numero de veces a repetir");   
     
     if (veces===0) return console.error("El numero de veces no puede ser '0' ");    

    if (Math.sign(veces)===-1) return console.error("el numero no puede ser negativo");
        
    for (let i = 1; i < veces; i++) console.info(`${text},${i}`);  
    
 }




