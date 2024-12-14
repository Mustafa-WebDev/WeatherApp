const maindiv = document.getElementById('main');
const myinp = document.getElementById('myinp');

const search = () => {
    const cityName = myinp.value; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3061b15dee09472a8230f1e11e9af97`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data); 
            maindiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" class="card-img-top" alt="Weather Icon">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">
                        Weather: ${data.weather[0].description}<br>
                        Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C<br>
                        Humidity: ${data.main.humidity}%
                    </p>
                </div>
            </div>`;
        })
        .catch((err) => {
            console.error(err);
            maindiv.innerHTML = `<p class="text-danger">Failed to fetch weather data. Please check the city name or try again later.</p>`;
        });
};
