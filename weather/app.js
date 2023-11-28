// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={bdfc1ccb8a92b5cc2f8331eb8ab33392}

// bdfc1ccb8a92b5cc2f8331eb8ab33392

// document.getElementById("getWeatherBtn").addEventListener("click", function () {
//   const cityName = document.getElementById("cityInput").value;
//   const apiKey = "bdfc1ccb8a92b5cc2f8331eb8ab33392";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//   //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${bdfc1ccb8a92b5cc2f8331eb8ab33392}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayWeather(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching the weather data:", error);
//       alert("Failed to fetch weather data. Please try again.");
//     });
// });

// solution w. await:
// document
//   .getElementById("getWeatherBtn")
//   .addEventListener("click", async function () {
//     const cityName = document.getElementById("cityInput").value;
//     const apiKey = "bdfc1ccb8a92b5cc2f8331eb8ab33392";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       displayWeather(data);
//     } catch (error) {
//       console.error("Error fetching the weather data:", error);
//       alert("Failed to fetch weather data. Please try again.");
//     }
//   });

// return event listener added
// document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
// document
//   .getElementById("cityInput")
//   .addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       getWeather();
//     }
//   });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather();
});

async function getWeather() {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = "bdfc1ccb8a92b5cc2f8331eb8ab33392";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
  }
}

function displayWeather(data) {
  const weatherResultDiv = document.getElementById("weatherResult");

  if (data.cod !== 200) {
    weatherResultDiv.innerHTML =
      "Weather data not found. Please try another city.";
    return;
  }

  //   const tempInCelsius = (data.main.temp - 273.15).toFixed(2);
  const temp = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;

  weatherResultDiv.innerHTML = `
        <h2>${data.name} Weather</h2>
        <p>Temperature: ${temp} °C</p>
        <p>Description: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;
}
