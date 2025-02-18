
export async function fetchWeather(city) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

    return await response.json();
}