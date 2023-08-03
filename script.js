//
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1accdc753bmshf39c655215eb6e7p1d954cjsnfd3a3bfea8ae",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) => {
  if (city === "") {
    alert("Please enter a city name");
    city = "Islamabad";
  }
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;

      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
//
const getweatherIsb = () => {
  cityname.innerHTML = "Islamabad";
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=islamabad",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;

      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};
getweatherIsb();

//
const getweatherlahore = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      lcloud_pct.innerHTML = response.cloud_pct;
      ltemp.innerHTML = response.temp;
      lfeels_like.innerHTML = response.feels_like;
      lhumidity.innerHTML = response.humidity;
      lmin_temp.innerHTML = response.min_temp;
      lmax_temp.innerHTML = response.max_temp;
      lwind_speed.innerHTML = response.wind_speed;
      lwind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.log(err));
};
getweatherlahore();

const getweathermltn = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=multan",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      mcloud_pct.innerHTML = response.cloud_pct;
      mtemp.innerHTML = response.temp;
      mfeels_like.innerHTML = response.feels_like;
      mhumidity.innerHTML = response.humidity;
      mmin_temp.innerHTML = response.min_temp;
      mmax_temp.innerHTML = response.max_temp;
      mwind_speed.innerHTML = response.wind_speed;
      mwind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.log(err));
};
getweathermltn();

const getweatherkrachi = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      kcloud_pct.innerHTML = response.cloud_pct;
      ktemp.innerHTML = response.temp;
      kfeels_like.innerHTML = response.feels_like;
      khumidity.innerHTML = response.humidity;
      kmin_temp.innerHTML = response.min_temp;
      kmax_temp.innerHTML = response.max_temp;
      kwind_speed.innerHTML = response.wind_speed;
      kwind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.log(err));
};
getweatherkrachi();
