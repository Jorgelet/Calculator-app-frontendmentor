"use strict";

let botones = document.querySelectorAll(".keys");
let pantalla = document.querySelector(".result");
const borrar = document.querySelector(".blue__del");
const resetear = document.querySelector(".reset");
const sumar = document.querySelector(".suma");
const igual = document.querySelector(".red");
const restar = document.querySelector(".resta");
const division = document.querySelector(".division");
const multi = document.querySelector(".multi");
const contenedor = document.querySelector(".main__number");
const circulo = document.querySelector(".circle");
const contenedorCirculo = document.querySelector(".circle__container")

let fontSizeOriginal = parseInt(window.getComputedStyle(pantalla).fontSize, 10);
let ancho = contenedor.offsetWidth - 40;
let tecla;
let result;
let mate;
let op;
let num1S;
let num2S;
let ig = false;

document.addEventListener("keydown", (event) => {
    let teclado = event.key;
    const operacionesValidas = ['+', '-', '*', '/'];

    if (/^[0-9]$/.test(teclado) || teclado === ".") {
        if (pantalla.textContent.length === 0) {
            pantalla.textContent = teclado;
        } else {
            if (pantalla.clientWidth > ancho) {
                return;
            }
            pantalla.textContent += teclado;
        }
    }

    else if (operacionesValidas.includes(teclado)) {
        operacion(teclado);
    }
    else if (teclado === "Enter") { 
        comprobar();
    } 
    else if (teclado === "Escape") { 
        pantalla.textContent = "";
        pantalla.style.fontSize = fontSizeOriginal + 'px';
    }
    else if (teclado === "Backspace") {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
});


for (let boton of botones) {
    boton.addEventListener("click", ()=>{
        tecla = boton.textContent;
        if (pantalla.textContent.length === 0) {
            pantalla.textContent = tecla;
        }else {
            if (pantalla.clientWidth > ancho) {
                return;
            }
            pantalla.textContent += tecla;
        }
    })    
}


borrar.addEventListener("click", ()=>{
    pantalla.textContent = pantalla.textContent.slice(0, -1);
})

resetear.addEventListener("click", ()=>{
    pantalla.textContent = "";
    pantalla.style.fontSize = fontSizeOriginal + 'px';
})


function comprobar(){
    switch (op) {
        case "+":
            if (ig == false) {
                num2S = pantalla.textContent;
                mate = parseFloat(num1S) + parseFloat(num2S);
                result = parseFloat(mate.toFixed(3));
                ig = true
            } else {
                num2S = pantalla.textContent;
                num1S = num2S;
                mate = parseFloat(num1S) + parseFloat(num2S);
                result = parseFloat(mate.toFixed(3));
            }
            break;
        case "-":
            if (ig == false) {
                num2S = pantalla.textContent;
                mate = parseFloat(num1S) - parseFloat(num2S);
                result = parseFloat(mate.toFixed(3));
                ig = true
            } else {
                num2S = pantalla.textContent;
                num1S = num2S
                mate = parseFloat(num1S) - parseFloat(num2S);
                result = parseFloat(mate.toFixed(3));
            }
            break;
        case "/":
            if (ig == false) {
                num2S = pantalla.textContent;
                mate = num1S / num2S;
                if (num2S == 0) {
                    result = "Error"
                } else {
                    result = parseFloat(mate.toFixed(3));
                    ig = true                        
                }
            } else {
                num2S = pantalla.textContent;
                num1S = num2S
                mate =  num1S /  num2S;
                result = parseFloat(mate.toFixed(3));
            }
            break;
        case "*":
            if (ig == false) {
                num2S = pantalla.textContent;
                mate =  num1S *  num2S;
                result = parseFloat(mate.toFixed(3));
                ig = true
            } else {
                num2S = pantalla.textContent;
                num1S = num2S
                mate =  num1S *  num2S;
                result = parseFloat(mate.toFixed(3));
            }
            break;
        default:
            break;
    }

    pantalla.textContent = result;
    let fontSize = parseInt(window.getComputedStyle(pantalla).fontSize, 10);

    while (pantalla.clientWidth > ancho && fontSize > 1) {
        fontSize--;
        pantalla.style.fontSize = fontSize + 'px';
    }
}


igual.addEventListener("click", comprobar);

function operacion(es){
    num1S = pantalla.textContent;
    pantalla.textContent = ``;
    op = es; 
    ig = false;        
}

sumar.addEventListener("click", function(){operacion("+")});
restar.addEventListener("click", function(){operacion("-")});
division.addEventListener("click", function(){operacion("/")});
multi.addEventListener("click", function(){operacion("*")});



const cambiarTema = ()=>{
    let body = document.body;
    let calcTitulo = document.querySelector(".header__title");
    let themeTitulo = document.querySelector(".theme__title");
    let numeros = document.querySelectorAll(".selection");
    let fondoCalc = document.querySelector(".main__calc")
    let Btn = document.querySelectorAll(".blue");
    let whiteN = document.querySelectorAll(".white");

    if (window.getComputedStyle(contenedorCirculo).justifyContent == "left") {

        contenedorCirculo.style.cssText = "justify-content: center; background-color: hsl(0, 5%, 81%);";
        circulo.style.backgroundColor = "hsl(25, 98%, 40%)";
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        calcTitulo.style.color = "hsl(60, 10%, 19%)";
        themeTitulo.style.color = "hsl(60, 10%, 19%)";
        numeros.forEach((numero)=>{
            numero.style.color = "hsl(60, 10%, 19%)";
        })
        Btn.forEach((blue)=>{
            blue.style.cssText = "background-color: hsl(185, 42%, 37%); box-shadow: 0 4px hsl(185, 58%, 25%);";
        })
        whiteN.forEach((white)=>{
            white.style.cssText = "background-color: hsl(45, 7%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0 4px hsl(35, 11%, 61%);";
        })
        contenedor.style.cssText = "color: hsl(60, 10%, 19%); background-color: hsl(0, 0%, 93%); font-weight: 700;";
        fondoCalc.style.backgroundColor = "hsl(0, 5%, 81%)";
        igual.style.cssText = "background-color: hsl(25, 98%, 40%); box-shadow: 0 4px hsl(25, 99%, 27%);";
    }

    else if (window.getComputedStyle(contenedorCirculo).justifyContent == "center"){
        contenedorCirculo.style.cssText = "justify-content: right; background-color: hsl(268, 71%, 12%);";
        circulo.style.backgroundColor = "hsl(176, 100%, 44%)";
        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        calcTitulo.style.color = "hsl(52, 100%, 62%)";
        themeTitulo.style.color = "hsl(52, 100%, 62%)";
        numeros.forEach((numero)=>{
            numero.style.color = "hsl(52, 100%, 62%)";
        })
        Btn.forEach((blue)=>{
            blue.style.cssText = "color: #fff; background-color: hsl(281, 89%, 26%); box-shadow: 0 4px hsl(285, 91%, 52%);";
        })
        whiteN.forEach((white)=>{
            white.style.cssText = "background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0 4px hsl(290, 70%, 36%);";
        })
        contenedor.style.cssText = "color: hsl(52, 100%, 62%); background-color: hsl(268, 71%, 12%);";
        fondoCalc.style.backgroundColor = "hsl(268, 71%, 12%)";
        igual.style.cssText = "color: hsl(268, 75%, 9%); background-color: hsl(176, 100%, 44%); box-shadow: 0 4px hsl(177, 92%, 70%);";
    }

    else if (window.getComputedStyle(contenedorCirculo).justifyContent == "right"){
        contenedorCirculo.style.cssText = "justify-content: left; background-color: hsl(223, 31%, 20%);";
        circulo.style.backgroundColor = "hsl(6, 63%, 50%)";
        body.style.backgroundColor = "hsl(222, 26%, 31%)";
        calcTitulo.style.color = "hsl(0, 0%, 100%)";
        themeTitulo.style.color = "hsl(0, 0%, 100%)";
        numeros.forEach((numero)=>{
            numero.style.color = "hsl(0, 0%, 100%)";
        })
        Btn.forEach((blue)=>{
            blue.style.cssText = "color: hsl(0, 0%, 100%); background-color: hsl(225, 21%, 49%); box-shadow: 0 4px hsl(224, 28%, 35%);";
        })
        whiteN.forEach((white)=>{
            white.style.cssText = "background-color: hsl(30, 25%, 89%); color: hsl(221, 14%, 31%); box-shadow: 0 4px hsl(28, 16%, 65%);";
        })
        contenedor.style.cssText = "color: hsl(0, 0%, 100%); background-color: hsl(224, 36%, 15%);";
        fondoCalc.style.backgroundColor = "hsl(223, 31%, 20%)";
        igual.style.cssText = "color: hsl(0, 0%, 100%); background-color: hsl(6, 63%, 50%); box-shadow: 0 4px hsl(6, 70%, 34%);";

    }
}

circulo.addEventListener("click", cambiarTema);