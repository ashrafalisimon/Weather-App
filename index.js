
const searchInput = document.querySelector('.search-div input');
const searchBtn = document.querySelector('.search-div button');
const weatherIcon = document.getElementById('weather-image');
const errorMessage = document.getElementById('error');
const weatherDiv = document.getElementById('weather-details');
const apiKey = '7e07737df5c2ff438f69e89aa9020bf7';




const checkWeather = async (cityName)=>{
    const apiUrl  = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`;

    const respons = await fetch(apiUrl);
    if(respons.status == 404){
        console.log('not found');
        errorMessage.classList.remove('hidden');
        weatherDiv.classList.add('hidden');
    }else{
        errorMessage.classList.add('hidden');
        weatherDiv.classList.remove('hidden');
        const data = await respons.json();
        const req = updateWeather(data);
    }
  
}

const updateWeather = (data)=>{
    // console.log(data);
    // console.log(data.weather[0].main);
    
    console.log(weatherIcon.src);
    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    } else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png';
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }
    
    document.getElementById('temp').innerText = Math.round(data.main.temp);
    document.getElementById('city').innerText = data.name;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('wind').innerText = data.wind.speed;
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchInput.value);
});
checkWeather('dhaka');

