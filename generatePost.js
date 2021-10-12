// function historyPost (location, currentlyValue) {
//     const li = document.createElement("li");
//     li.textContent += location;
//     li.textContent += ` - ${currentlyValue}°F`;
//     if (currentlyValue){
//         li.after(document.createElement("br"), currentlyValue);
//     }
//     return li;
// }

function historyPost (location, currentlyValue) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    ul.appendChild(li)
    const anchor = document.createElement("a");
    anchor.textContent = `${location} - ${currentlyValue}°F` ;
    anchor.onclick = function(){
        loadWeatherData(location);
    }
    //anchor.setAttribute("href", `index.html?location=${location}`)
    li.appendChild(anchor);

    
}

function generatePost (location, currentlyValue) {
    historyPost (location, currentlyValue);
    const generate = document.querySelector( ".history") 
    //generate.appendChild(li);
}

