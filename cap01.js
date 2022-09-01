
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

var objeto_01 = new Object();
var objeto_02 = objeto_01;

console.log(objeto_01 == objeto_02); //true
console.log(objeto_01 === objeto_02); //true


//REMOVENDO A REFERNEICA A OBJETOS
objeto_02 = null;
console.log(objeto_01 == objeto_02); //false
console.log(objeto_01 === objeto_02); //false


//ADICIONADO OU REMOVENDO PROPRIEDADES

var objeto_03 = new Object();
var objeto_04 = objeto_03;

objeto_03.myCustomProperty = "Nova propiedade";
console.log(objeto_04.myCustomProperty); // Nova propriedade


//INSTANCIANDO TIPOS PRÓPRIOS
    //tipos próprios
    /**
     * Array, Date, Error, Function, Object, RegExp
     */
    var itens = new Array();
    var dataAgora = new Date();

    console.log(itens); //[]
    console.log(dataAgora); //2022-09-01T14:04:15.292Z

    var nomesAdicionar = new Array("Samuel", "Lima", "De", "Farias");
    console.log(nomesAdicionar); //[ 'Samuel', 'Lima', 'De', 'Farias' ]


    itens.push("SAMUEL");
    itens.push("RUANNA");
    console.log(itens); //[ 'SAMUEL', 'RUANNA' ]


//FORMAS LITERAIS
    //LITERAIS DE OBJETOS E ARRAYS
    console.log("----------------------------------------------");
    var livro = {
        nome : "Matematica",
        ano : 2022
    };

    console.log("Objeto Completo: " + livro); //[object Object]
    console.log("Nome do livro: " + livro.nome); // Matematica
    console.log("Ano do livro: " + livro.ano); // 2022

    console.log("----------------------------------------------");
    var livro_02 = {
        "nome" : "Fisica",
        "ano" : 2021
    };

    console.log("Objeto Completo: " + livro_02); //[object Object]
    console.log("Nome do livro_02: " + livro_02.nome); // Fisica
    console.log("Ano do livro_02: " + livro_02.ano); // 2021

    console.log("----------------------------------------------");
    var livro_03 = new Object();
    livro_03.nome = "Geografia";
    livro_03.ano = 2019;

    console.log("Objeto Completo: " + livro_03); //[object Object]
    console.log("Nome do livro_03: " + livro_03.nome); // Fisica
    console.log("Ano do livro_03: " + livro_03.ano); // 2021

    console.log("----------------------------------------------");

    //ARRAYS
    var cores = ['Azul', "Branco", "verde"];
    var cores_01 = new Array("Azul", 'Branco', "verde");

    console.log(cores[0]); //Azul
    console.log(cores_01[2]); //verde

    console.log("----------------------------------------------");

    //LITERAIS FUNCTIONS
    function soma(a, b){
        return a+b;
    }
    console.log("Soma 01: " + soma(2,2));

    console.log("----------------------------------------------");


    //LITERAIS FUNCOES REGULARES

    var nnumbers = /\d+/g;
    var nnumbers = new RegExp("\\d+", "g");

    //ACESSO A PROPRIEDADES

    var numerosArrays = [];
    numerosArrays.push(1234); 
    console.log(numerosArrays); // 1234

    var numerosArrays_02 = [];
    numerosArrays_02["push"](4567);
    console.log(numerosArrays_02); // 4567

    console.log("----------------------------------------------");

    console.log("----------------------------------------------");

    console.log("----------------------------------------------");

    console.log("----------------------------------------------");

    console.log("----------------------------------------------");




























