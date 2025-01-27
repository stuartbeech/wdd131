function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1) + ' ℃';
    } else {
        return "N/A";
    }
}

let temperature = 30;
let windSpeed = 5;
let windchillFactor = calculateWindChill(temperature, windSpeed);

document.getElementById("windchill").textContent = windchillFactor;
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;