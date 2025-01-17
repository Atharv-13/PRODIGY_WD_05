const apiKey = "1da8895f46de68aec6e5d7c7f71f4666";

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => alert(error.message));
}

function displayWeather(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { description } = data.weather[0];
  const { speed } = data.wind;

  document.getElementById("cityName").textContent = `Weather in ${name}`;
  document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
  document.getElementById("weatherDescription").textContent = `Condition: ${description}`;
  document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
  document.getElementById("windSpeed").textContent = `Wind Speed: ${speed} m/s`;

  document.getElementById("weatherResult").style.display = "block";
}
