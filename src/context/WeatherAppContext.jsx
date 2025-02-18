import { createContext, useContext, useEffect, useState } from "react";
import { useWeather } from "../components/useWeather";
import toast from "react-hot-toast";

const WeatherAppContext = createContext();

function WeatherAppProvider({ children }) {
  const [city, setCity] = useState("cairo");
  const [inputValue, setInputValue] = useState("");

  const { weatherinfo, isPending, error } = useWeather(city);
  useEffect(() => {
    if (error) {
      toast.error("Cannot find the city you're looking for");
      setCity("cairo"); // Reset to default city on error
    }
  }, [error]);


  return (
    <WeatherAppContext.Provider
      value={{
        city,
        onSearch: setCity,
        inputValue,
        setInputValue,
        weatherinfo,
        isPending,
        error,
      }}
    >
      {children}
    </WeatherAppContext.Provider>
  );
}

function useWeatherApp() {
  const context = useContext(WeatherAppContext);
  if (context === undefined)
    throw new Error("DarkMode context was used outside DarkModeProvider");
  return context;
}

export { WeatherAppProvider, useWeatherApp };
