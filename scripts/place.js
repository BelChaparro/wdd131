// Set Date object
const today = new Date();

// Get Year and set it on page
document.getElementById("current-year").textContent = today.getFullYear();

// Set lastModified property
document.getElementById("last-modified").textContent = document.lastModified;

// Weather
const temp = 22;
const humidity = 82;
const windSpeed = 21;

document.getElementById("temperature").textContent = temp;
document.getElementById("conditions").textContent = humidity;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);

// Function to calculate the wind chill factor in °C
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16); 
        return windChill.toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}
