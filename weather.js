
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");



const form1 = document.querySelector('form');
const searchField1 = document.querySelector('.searchField');

form1.addEventListener('submit', search);

let target = 'Milan';

function search(e){
    e.preventDefault();
    target = searchField1.value;

    fetchData(target);

}


async function fetchData(target)
{
    // console.log(Somen)
    let endPoint = `http://api.weatherapi.com/v1/current.json?key=de86228c901e4b369b4185826240209&q=${target}&aqi=no`

    const response = await fetch(endPoint);
    //console.log(response);
    const data = await response.json();

    console.log(data);

    let currentTemp = data.current.temp_c;
    let locationName = data.location.name;
    let localTime = data.location.localtime

    let currentCondition = data.current.condition.text
    let conditonLogo = data.current.condition.icon

    console.log(currentTemp)
    console.log(locationName)

    updateWeatherData(locationName , currentTemp ,localTime , currentCondition , conditonLogo)
}


function updateWeatherData(cityName , temperature , time , currentCondition , conditonLogo)
{
    cityField.innerText = cityName
    temperatureField.innerText = temperature
    dateField.innerText = time
    weatherField.innerText = currentCondition
    emojiField.src = conditonLogo
}
  

//console.log("ABC");