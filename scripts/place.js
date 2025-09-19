const yearElement = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Murillo de Jesus | São Bento do Sul, Brazil`;

const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;

const weatherData1 = {
    temp: 15,  
    speed: 10, 
};

const weatherDataToUse = weatherData1;

const temperature = weatherDataToUse.temp;
const windSpeed = weatherDataToUse.speed;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

const windchillElement = document.getElementById('windchill');
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');

if (temperatureElement) {
    temperatureElement.textContent = `${temperature} °C`;
}
if (windSpeedElement) {
    windSpeedElement.textContent = `${windSpeed} km/h`;
}


if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    if (windchillElement) {
        windchillElement.textContent = `${windChill} °C`;
    }
} else {
    if (windchillElement) {
        windchillElement.textContent = 'N/A';
    }
}