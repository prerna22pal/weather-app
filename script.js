//shubh shuruwatttttt

const apikey="a80def166de280199b74fffe89054720";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temperature = document.querySelector(".temp");
let cities=document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBox=  document.querySelector(".search input");
let searchBtn=  document.querySelector(".search button");
let weathericon=  document.querySelector(".weather-info img");
let weather=  document.querySelector(".weather");

async function checkWeather(shehar){
  const response = await fetch(apiURL +shehar+ `&appid=${apikey}`);
  let data= await response.json();
 // console.log(data);

  cities.innerHTML=data.name;
  temperature.innerHTML=Math.round(data.main.temp)+"°C";
  humidity.innerHTML=data.main.humidity+"%";
  wind.innerHTML=data.wind.speed+" km/h";
  weather.style.display="block";

  if(data.weather[0].main=="Drizzle"){
    weathericon.src="drizzle.png";
  }
  else if(data.weather[0].main=="Haze"){
    weathericon.src="haze.png";
  }
  else if(data.weather[0].main=="Rain"){
    weathericon.src="rainy.webp";
  }
  else if(data.weather[0].main=="Clouds"){
    weathericon.src="clouds.webp";
  }
  else if(data.weather[0].main=="Mist"){
    weathericon.src="mist.png";
  }
  


}


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})