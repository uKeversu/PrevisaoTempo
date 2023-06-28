

const key = "440419cba63bcba255ff1a765f298be6"

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function writeData(data){

    document.querySelector(".city").innerHTML = "Previsão em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".txt-clima").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-clima").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(
        resposta => resposta.json())

        writeData(data)
}

function clickBtn() {

    const city = document.querySelector(".input-city").value

    searchCity(city)
}