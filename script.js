function whether(){
     var loc=currntinp1.value 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=calicut&appid=5b4bee0ba241d092159faf007e166080')
    .then(out=>out.json())
    .then(result=>readTemp(result))
    }

    function readTemp(arrayOut){
      const temperatureKelvin = arrayOut.main.temp;
      const feelsLike=arrayOut.main.feels_like;
  
      const temperatureCelsius = temperatureKelvin - 273.15;
      const feelsLikeCelcius=feelsLike - 273.15;

      const pressure=arrayOut.main.pressure;
      const humidity=arrayOut.main.humidity;
      const windSpeed=arrayOut.wind.speed;

      const sunrise = arrayOut.sys.sunrise;
      const sunset = arrayOut.sys.sunset;

       // Convert Unix timestamps to Date objects
    const sunriseDate = new Date(sunrise * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const sunsetDate = new Date(sunset * 1000);

     // Format sunrise and sunset times
     const sunriseTimeString = sunriseDate.toLocaleTimeString();
     const sunsetTimeString = sunsetDate.toLocaleTimeString();

     const whetherMain =arrayOut.weather[0].main;
     const whetherDesc=arrayOut.weather[0].description;


    
    
    document.getElementById('temp').innerHTML = `
                    <h4 class="text-white ps-3 label"><i>Weather</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/cloudy.png" style="width:30px;" alt="">
                        ${whetherMain} -   ${whetherDesc}  </h4>

                    <h3 class="text-white ps-3 label"><i>Temperature</i>&nbsp:&nbsp<img class="pe-3" src="./img/sunny.png" style="width:40px;" alt="">
                        ${temperatureCelsius.toFixed(2)}°C</h3>

                    <h3 class="text-white ps-3 label"><i>Feels like</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/cloudy.png" style="width:40px;" alt="">
                        ${feelsLikeCelcius.toFixed(2)}°C</h3>

                    <h3 class="text-white ps-3 label"><i>Pressure</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/pressure.png" style="width:40px;" alt="">
                        ${pressure} hPa</h3>
                    
                    <h3 class="text-white ps-3 label"><i>Humidity</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/humidity.png" style="width:40px;" alt="">
                        ${humidity} %</h3>

                    <h3 class="text-white ps-3 label"><i>Wind speed</i>&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/wind.png" style="width:50px;" alt="">
                        ${windSpeed} m/s</h3>

                    <h3 class="text-white ps-3 label"><i>Sunrise</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/sunrise.png" style="width:50px;" alt="">
                        ${sunriseTimeString}</h3>
                        
                    <h3 class="text-white ps-3 label"><i>Sunset</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/sunset.png" style="width:50px;" alt="">
                        ${sunsetTimeString}</h3>
                      
                        `

                        // Show the weather card
    document.getElementById('weatherCard').style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function() {
  const LocationBtn = document.getElementById("currntbt1");
  const locationInput = document.getElementById("currntinp1");
  LocationBtn.addEventListener("click", function() {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // locationInput.value = "Latitude: " + latitude + ", Longitude: " + longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5b4bee0ba241d092159faf007e166080`)
                            .then(out => out.json())
                            .then(result => {
                                const whetherMain =result.weather[0].main;
                                const whetherDesc=result.weather[0].description;


                                const temperatureKelvin = result.main.temp;
                                const temperatureCelsius = temperatureKelvin - 273.15;

                                const feelsLike=result.main.feels_like;
                                const feelsLikeCelcius=feelsLike - 273.15;

                                const pressure=result.main.pressure;
                                const humidity=result.main.humidity;
                                const windSpeed=result.wind.speed;

                                const sunrise = result.sys.sunrise;
                                const sunset = result.sys.sunset;

                                const sunriseDate = new Date(sunrise * 1000); // Multiply by 1000 to convert seconds to milliseconds
                                const sunsetDate = new Date(sunset * 1000);
                            
                                 // Format sunrise and sunset times
                                 const sunriseTimeString = sunriseDate.toLocaleTimeString();
                                 const sunsetTimeString = sunsetDate.toLocaleTimeString();

                                currntinp1.value = `Latitude: ${latitude}, Longitude: ${longitude}`;
                                document.getElementById('temp').innerHTML = `
                                <h4 class="text-white ps-3"><i>Weather</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/sunny.png" style="width:40px;" alt="">
                        ${whetherMain} -   ${whetherDesc}  </h4>

                        <h3 class="text-white ps-3"><i>Temperature</i>&nbsp:&nbsp<img class="pe-3" src="./img/sunny.png" style="width:40px;" alt="">
                        ${temperatureCelsius.toFixed(2)}°C</h3>                                
                                
                                <h3 class="text-white ps-3"><i>Feels like</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/cloudy.png" style="width:40px;" alt="">
                                     ${feelsLikeCelcius.toFixed(2)}°C</h3>
                                     
                                     <h3 class="text-white ps-3"><i>Pressure</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/pressure.png" style="width:40px;" alt="">
                        ${pressure} hPa</h3>
                    
                    <h3 class="text-white ps-3"><i>Humidity</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/humidity.png" style="width:40px;" alt="">
                        ${humidity} %</h3>

                    <h3 class="text-white ps-3"><i>Wind speed</i>&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/wind.png" style="width:50px;" alt="">
                        ${windSpeed} m/s</h3>

                    <h3 class="text-white ps-3"><i>Sunrise</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/sunrise.png" style="width:50px;" alt="">
                        ${sunriseTimeString}</h3>
                        
                    <h3 class="text-white ps-3"><i>Sunset</i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp<img class="pe-3" src="./img/sunset.png" style="width:50px;" alt="">
                        ${sunsetTimeString}</h3>
                                     `
                                     document.getElementById('weatherCard').style.display = 'block';
                            })
                            .catch(error => {
                                console.error('Error fetching weather data:', error);
                            });

      }, function(error) {
        // Handle errors
        switch(error.code) {
          case error.PERMISSION_DENIED:
            locationInput.value = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            locationInput.value = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            locationInput.value = "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            locationInput.value = "An unknown error occurred.";
            break;
        }
      });
    } else {
      // Geolocation is not supported
      locationInput.value = "Geolocation is not supported by this browser.";
    }
  });
});
