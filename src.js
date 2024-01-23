const apiKey = "7212359105a5c68e172e38590dcc8486";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404 || searchBox.value == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if ((data.weather[0].main = "Clear")) {
      weatherIcon.src = "images/clear.png";
    } else if ((data.weather[0].main = "Rain")) {
      weatherIcon.src = "images/rainy.png";
    } else if ((data.weather[0].main = "Mist")) {
      weatherIcon.src = "images/Snowy.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
