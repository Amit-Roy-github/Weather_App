
const apiKey="cc610b3f4f67b6b5dd327146fd29318b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
   const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

   if(response.status==404)
   {
      document.querySelector(".error").style.display="block";
   document.querySelector(".weather").style.display="none";

      return ;
   }
   
   var data=await response.json();

   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
   document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
   document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
   const weatherCondition=data.weather[0].main;

   if(weatherCondition=="Clouds")
   {
      weatherIcon.src="clouds.png";
   }
   else if(weatherCondition=="Mist")
   {
      weatherIcon.src="mist.png";
   }
   else if(weatherCondition=="Clear")
   {
      weatherIcon.src="clear.png";
   }
   else if(weatherCondition=="Rain")
   {
      weatherIcon="rain.png";
   }
   else
   {
      weatherIcon="snow.png";
   }
   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";
   searchBox.value="";
}

searchBtn.addEventListener('click',()=>{
   checkweather(searchBox.value);
   
})
 
