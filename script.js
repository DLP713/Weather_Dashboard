// Sends input data to local storage.

// const apiKey = {your apikey}

function mySave(){
    const cityInput = document.getElementById("city").value;
    localStorage.setItem("city", cityInput); // {city: 'whatever the user entered'}
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid=' + apiKey)
    .then(response => response.json())
    .then(data => {

        const p = document.createElement('p');
        p.innerText = data.main.temp;
        p.classList.add('')

        document.body.appendChild(p);

    });
}
