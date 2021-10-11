const form = document.querySelector('.display form'); //selected the form id
form. addEventListener('submit', (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    fetch(`https://wttr.in/${location}?format=j1`)
        .then ((response) => response.json())
        .then((weather) => {
            console.log(weather);
            const h2 = document.querySelector("h2");
            h2.textContent = areaValue;
            const areaBold = document.querySelector("#areaBold .bold");
            const areaDisValue = document.querySelector("#area");
            areaBold.textContent = "Area: ";
            areaDisValue.textContent = areaValue;
        
            const regionBold = document.querySelector("#regionBold .bold");
            const regionDisValue = document.querySelector("#region");
            regionBold.textContent = "Region: ";
            regionDisValue.textContent = regionValue;
        
            const countryBold = document.querySelector("#countryBold .bold");
            const countryDisValue = document.querySelector("#country");
            countryBold.textContent = "Country: ";
            countryDisValue.textContent = countryValue;
        
            const currentlyBold = document.querySelector("#currentlyBold .bold");
            const currentlyDisValue = document.querySelector("#currently");
            currentlyBold.textContent = "Currently: ";
            currentlyDisValue.textContent = `Feels like ${currentlyValue}°F`;
        
            const averageTempValue = weather.weather[0].avgtempF;
            const MaxTempValue = weather.weather[0].maxtempF;
            const MinTempValue =weather.weather[0].mintempF;

        
        

        })
        .catch((error) => {
            console.log(error);
        });
});