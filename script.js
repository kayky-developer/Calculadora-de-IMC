var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
})

function calcular(){
    var peso = document.getElementById("weight").value;
    var altura = document.getElementById("height").value;
    var resultado = document.getElementById("number");

    var info = document.getElementById("container-info");

    var calculo = (peso / (altura * altura)).toFixed(2);

    var hidden = document.getElementById("hidden").classList.remove("hidden")

    resultado.innerText = calculo

    if (calculo <= 18) {
        info.innerHTML = "Cuidado!, você está muito abaixo do peso."
    }
    else if (calculo <= 18.49 || calculo == 17){
        info.innerHTML = "Cuidado! Você está abaixo do peso."
    } else if (calculo <= 24.99 || calculo == 18.50){
        info.innerHTML = "Você está com o peso normal."
    } else if (calculo <= 29.99 || calculo == 25){
        info.innerHTML = "Cuidado! Você está acima do peso."
    } else if (calculo <= 34.99 || calculo == 30){
        info.innerHTML = "Cuidado! Você está com obesidade I."
    } else if (calculo <= 39.99 || calculo == 35){
        info.innerHTML = "Cuidado! Você está com obesidade II (severa)."
    } else if (calculo >= 40){
        info.innerHTML = "Cuidado! Você está com obesidade III (mórbida)."
    }
}