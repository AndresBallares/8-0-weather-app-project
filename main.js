const form = document.querySelector('.display form'); //selected the form id
form. addEventListener('submit', (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    fetch(`https://wttr.in/${location}?format=j1`)
        .then ((response) => response.json())
        .then((weather) => {



            let areaValue = weather.nearest_area[0].areaName[0].value;
            const regionValue = weather.nearest_area[0].region[0].value;
            const countryValue = weather.nearest_area[0].country[0].value;
            const currentlyValue = weather.current_condition[0].FeelsLikeF;


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

            const today = document.querySelector(".Today");
            today.textContent = "Today";
            const aveTemBold = document.querySelector("#aveTemBold .bold");
            const aveDisValue = document.querySelector("#average");
            aveTemBold.textContent = "Average Temperature: ";
            aveDisValue.textContent = `${averageTempValue}°F`;
        
            const maxTemBold = document.querySelector("#maxTemBold .bold");
            const maxDisValue = document.querySelector("#maxTemperature");
            maxTemBold.textContent = "Max Temperature: ";
            maxDisValue.textContent = `${MaxTempValue}°F`;
        
            const minTemBold = document.querySelector("#minTemBold .bold");
            const minDisValue = document.querySelector("#minTemperature");
            minTemBold.textContent = "Min Temperature: ";
            minDisValue.textContent = `${MinTempValue}°F`;

            const averageTomorrow = weather.weather[1].avgtempF;
            const MaxTomorrow = weather.weather[1].maxtempF;
            const MinTomorrow = weather.weather[1].mintempF;

            const tomorrow = document.querySelector(".Tomorrow");
            tomorrow.textContent = "Tomorrow";

            const aveTomorrow = document.querySelector("#aveTomorrowBold .bold");
            const aveTomorrowDisValue = document.querySelector("#average-tomorrow");
            aveTomorrow.textContent = "Average Temperature: ";
            aveTomorrowDisValue.textContent = `${averageTomorrow}°F`;

            const maxTomorrowBold = document.querySelector("#maxTomorrowBold .bold");
            const maxTomDisValue = document.querySelector("#max-tomorrow");
            maxTomorrowBold.textContent = "Max Temperature: ";
            maxTomDisValue.textContent = `${MaxTomorrow}°F`;

            const minTomorrow = document.querySelector("#minTomorrowBold .bold");
            const minTomDisValue = document.querySelector("#min-tomorrow");
            minTomorrow.textContent = "Min Temperature: ";
            minTomDisValue.textContent = `${MinTomorrow}°F`; 
        
            const averageDayAfter = weather.weather[2].avgtempF;
            const MaxDayAfter = weather.weather[2].maxtempF;
            const MinDayAfter = weather.weather[2].mintempF;
        
            const dayAfter = document.querySelector(".Day-After-Tomorrow");
            dayAfter.textContent = "Day After Tomorrow";
        
            const aveDayAfter = document.querySelector("#aveDayAfterBold .bold");
            const aveDayAfterDisValue = document.querySelector("#average-DayAfter");
            aveDayAfter.textContent = "Average Temperature: ";
            aveDayAfterDisValue.textContent = `${averageDayAfter}°F`;
        
            const maximumDayAfter = document.querySelector("#maxDayAfterBold .bold");
            const MaxDayDisValue = document.querySelector("#max-DayAfter");
            maximumDayAfter.textContent = "Max Temperature: ";
            MaxDayDisValue.textContent = `${MaxDayAfter}°F`;
        
            const minimumDayAfter = document.querySelector("#minDayAfterBold .bold");
            const MinDayDisValue = document.querySelector("#min-DayAfter");
            minimumDayAfter.textContent = "Min Temperature: ";
            MinDayDisValue.textContent = `${MinDayAfter}°F`;

            generatePost(location, currentlyValue);

            
            


        
        

        })
        .catch((error) => {
            console.log(error);
        });
});

function loadWeatherData (location) {
    fetch(`https://wttr.in/${location}?format=j1`)
        .then ((response) => response.json())
        .then((weather) => {



            let areaValue = weather.nearest_area[0].areaName[0].value;
            const regionValue = weather.nearest_area[0].region[0].value;
            const countryValue = weather.nearest_area[0].country[0].value;
            const currentlyValue = weather.current_condition[0].FeelsLikeF;


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

            const today = document.querySelector(".Today");
            today.textContent = "Today";
            const aveTemBold = document.querySelector("#aveTemBold .bold");
            const aveDisValue = document.querySelector("#average");
            aveTemBold.textContent = "Average Temperature: ";
            aveDisValue.textContent = `${averageTempValue}°F`;
        
            const maxTemBold = document.querySelector("#maxTemBold .bold");
            const maxDisValue = document.querySelector("#maxTemperature");
            maxTemBold.textContent = "Max Temperature: ";
            maxDisValue.textContent = `${MaxTempValue}°F`;
        
            const minTemBold = document.querySelector("#minTemBold .bold");
            const minDisValue = document.querySelector("#minTemperature");
            minTemBold.textContent = "Min Temperature: ";
            minDisValue.textContent = `${MinTempValue}°F`;

            const averageTomorrow = weather.weather[1].avgtempF;
            const MaxTomorrow = weather.weather[1].maxtempF;
            const MinTomorrow = weather.weather[1].mintempF;

            const tomorrow = document.querySelector(".Tomorrow");
            tomorrow.textContent = "Tomorrow";

            const aveTomorrow = document.querySelector("#aveTomorrowBold .bold");
            const aveTomorrowDisValue = document.querySelector("#average-tomorrow");
            aveTomorrow.textContent = "Average Temperature: ";
            aveTomorrowDisValue.textContent = `${averageTomorrow}°F`;

            const maxTomorrowBold = document.querySelector("#maxTomorrowBold .bold");
            const maxTomDisValue = document.querySelector("#max-tomorrow");
            maxTomorrowBold.textContent = "Max Temperature: ";
            maxTomDisValue.textContent = `${MaxTomorrow}°F`;

            const minTomorrow = document.querySelector("#minTomorrowBold .bold");
            const minTomDisValue = document.querySelector("#min-tomorrow");
            minTomorrow.textContent = "Min Temperature: ";
            minTomDisValue.textContent = `${MinTomorrow}°F`; 
        
            const averageDayAfter = weather.weather[2].avgtempF;
            const MaxDayAfter = weather.weather[2].maxtempF;
            const MinDayAfter = weather.weather[2].mintempF;
        
            const dayAfter = document.querySelector(".Day-After-Tomorrow");
            dayAfter.textContent = "Day After Tomorrow";
        
            const aveDayAfter = document.querySelector("#aveDayAfterBold .bold");
            const aveDayAfterDisValue = document.querySelector("#average-DayAfter");
            aveDayAfter.textContent = "Average Temperature: ";
            aveDayAfterDisValue.textContent = `${averageDayAfter}°F`;
        
            const maximumDayAfter = document.querySelector("#maxDayAfterBold .bold");
            const MaxDayDisValue = document.querySelector("#max-DayAfter");
            maximumDayAfter.textContent = "Max Temperature: ";
            MaxDayDisValue.textContent = `${MaxDayAfter}°F`;
        
            const minimumDayAfter = document.querySelector("#minDayAfterBold .bold");
            const MinDayDisValue = document.querySelector("#min-DayAfter");
            minimumDayAfter.textContent = "Min Temperature: ";
            MinDayDisValue.textContent = `${MinDayAfter}°F`;

           // generatePost(location, currentlyValue);

            
            
        });
}