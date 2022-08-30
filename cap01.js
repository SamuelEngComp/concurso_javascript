
/**
 * CAPITULO 01: TIPOS PRIMITIVOS E DE REFERENCIA
 */

//TIPOS PRIMITIVOS

console.log(" ------------------ TIPOS PRIMITIVOS  --------------------- ")

//boolean
verdadeiro = true
falso = false
console.log("Primitivo Boolean: " + verdadeiro + " e " + falso)

//number
idade = 29
altura = 1.70
console.log("Primitivo Number: " + idade + " e " + altura)

//string
nome = "Samuel Lima de Farias"
sexo = 'M'
console.log("Primitivo String: " + nome + " e " + sexo)

//null e undefined
nomeDaMae = null
var nomeDoPai
console.log("Primitivo Null e Undefined: " + nomeDaMae + " e " + nomeDoPai)

console.log(" ------------------ TIPOS PRIMITIVOS  --------------------- ")
//armazenamento
var nome01 = "Samuel"
var nome02 = nome01

console.log("Nome 01: " + nome01)
console.log("Nome 02: " + nome02)

if(nome01 == nome02){
    console.log("Nomes iguais")
}
if(nome01 === nome02){
    console.log("Nomes iguais e tipos tambem")
}

//Identificando tipos primitivos -> operador Typeof()
console.log(" -------IDENTIFICANDO TIPOS PRIMITIVOS COM TYPEOF ")

console.log("Primitivo Boolean: " + typeof verdadeiro + " e " + typeof falso)
console.log("Primitivo Number: " + typeof idade + " e " + typeof altura)
console.log("Primitivo String: " + typeof nome + " e " + typeof sexo)
console.log("Primitivo null e undefined: " + typeof nomeDaMae + " e " + typeof nomeDoPai)

console.log(" -------IDENTIFICANDO TIPOS PRIMITIVOS COM TYPEOF ")



//COMPARANDO SEM CONVERSAO -> ===
console.log(" -------COMPARANDO SEM CONVERSAO -> === ")
var idade02 = "29"
if(idade == idade02){
    console.log("valores iguais para idade ")
}

if(idade === idade02){
    console.log("valores iguais para idade e tipos iguais")
}
else{
    console.log("valores iguais para idade e tipos diferentes")
}


//METODOS PRIMITIVOS
console.log("Metodos primitivos String: ")
console.log("LowerCase: " + nome.toLowerCase())
console.log("UpperCase: " + nome.toUpperCase())
console.log("primeira letra: " + nome.charAt(0))
console.log("subString(2, 10): " + nome.substring(2, 10))


//TIPOS DE REFERENCIA
//CRIANDO OBJETOS






