const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d4cc75291mshe588dd0099be175p1e74e4jsnfe5521ee4cfe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
let refresh_tag = document.querySelectorAll(".refresh")

for (let index = 0; index < refresh_tag.length; index++) {
    refresh_tag[index].addEventListener("click", () => {
        location.reload()
    })

}

getWeather("Dhanbad")
