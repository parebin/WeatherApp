
const dateElement = document.getElementById('date');
const addButton = document.querySelector('#addbutton');
const inputCity = document.querySelector('#addtext');
const clearButton = document.querySelector('#refresh');

clearButton.addEventListener('click', function(){
    location.reload()
})


addButton.addEventListener('click', function(){
    const otherCity = inputCity.value;
    inputCity.value = "";
    console.log(otherCity)
    let temperatureDescription = document.querySelector('#temperature-description2');
    let temperatureDegree = document.querySelector('#temperature-degree2');
    let locationTimeZone = document.querySelector('#city2')
    let locationIcone = document.querySelector('#icone2')


    const api = `https://api.openweathermap.org/data/2.5/weather?q=${otherCity}&units=metric&lang=fr&appid=8143027b38e4fb86926bf066c2886aae`;


    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        console.log(data)
        const temp = data.main.temp;
        const descripton = data.weather[0].description;
        const icon = data.weather[0].icon
        

        // set DOM Element form the API
        temperatureDegree.textContent = Math.floor(temp);
        temperatureDescription.textContent = descripton;
        locationTimeZone.textContent = data.name;
        locationIcone.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icone"></img>`

    });
});


window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone')
    let locationIcone = document.querySelector('.icone')
    
     if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            /*const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&lang=fr&appid=8143027b38e4fb86926bf066c2886aae`;


            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                
                const {temp} = data.current;
                const descripton = data.current.weather[0].description;
                const icon = data.current.weather[0].icon

                // set DOM Element form the API
                temperatureDegree.textContent = Math.floor(temp)
                temperatureDescription.textContent = descripton
                locationTimeZone.textContent = data.timezone;
                locationIcone.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icone"></img>`
                */



                let city = "nantes"
                const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=8143027b38e4fb86926bf066c2886aae`;
            

                fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                   
                    
                    
                    const temp = data.main.temp;
                    const descripton = data.weather[0].description;
                    const icon = data.weather[0].icon
                    
    
                    // set DOM Element form the API
                    temperatureDegree.textContent = Math.floor(temp);
                    temperatureDescription.textContent = descripton;
                    locationTimeZone.textContent = data.name;
                    locationIcone.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icone"></img>`
    

                
            });
        });          
    }
});




// mettre la date du jour
const options = {year:"numeric", weekday : "short", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);

 
