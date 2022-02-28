var Celcius = document.getElementById("celcius")
var Fahrenheit = document.getElementById("fahrenheit")

var celtofar = document.getElementById('celtofar')
var fartocel = document.getElementById('fartocel')

function c2f(){
    Fahrenheit.value= (1.8*Celcius.value)+32
    
}

function f2c(){
    Fahrenheit.value=(Celcius.value-32)/1.8
    
}

function tempconvert(){
    if(celtofar.checked){c2f()}
    else if(fartocel.checked){f2c()}
}

function proc1(){
    fartocel.checked=false
}

function proc2(){
    celtofar.checked=false
}