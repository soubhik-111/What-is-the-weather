const city = document.getElementById('city');
const refresh_tag = document.querySelectorAll(".refresh")
let cityname = "Dhanbad";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d4cc75291mshe588dd0099be175p1e74e4jsnfe5521ee4cfe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const capitalizer = (name) =>{
    let newName = name.split(" ").map(ele=>ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()).join(" ")
    return newName;
}

const getWeather = (city) => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            if(response.temp) {
                cityname=city;
                msg.innerText=`Weather for ${city}`
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
            }
            else{
                msg.innerText="An unexpected error occured.";
                cloud_pct.innerHTML = '-';
                temp.innerHTML = '-';
                temp1.innerHTML = '-';
                feels_like.innerHTML = '-';
                humidity.innerHTML = '-';
                humidity1.innerHTML = '-';
                min_temp.innerHTML = '-';
                max_temp.innerHTML = '-';
                wind_speed.innerHTML = '-';
                wind_speed1.innerHTML = '-';
                sunrise.innerHTML = '-';
                sunset.innerHTML = '-';
            }
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let cityName = capitalizer(city.value)
    getWeather(cityName)
})

for (let index = 0; index < refresh_tag.length; index++) {
    refresh_tag[index].addEventListener("click", () => {
        getWeather(cityname)
    })
}


getWeather(cityname)