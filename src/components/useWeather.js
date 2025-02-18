import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../Services/apiWeather";

// useWeather.js
export function useWeather(city) {
    const { data: weatherinfo, isPending, error } = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        enabled: !!city, // Only fetch when city is provided
        retry:false
    });

    return { weatherinfo, isPending, error };
}