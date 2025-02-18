
export async function fetchWeather(city) {
    const API_KEY = "b0c056d3d14875fbd14f9f02f2001d25";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

    return await response.json();
}