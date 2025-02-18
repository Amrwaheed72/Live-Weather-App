import GlobalStyles from "./styles/GlobalStyles";
import WeatherApp from "./components/WeatherApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { WeatherAppProvider } from "./context/weatherAppContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherAppProvider>
        <ReactQueryDevtools />
        <div>
          <GlobalStyles />
          <WeatherApp />
        </div>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              color: "orange",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              Color: "var(--color-grey-700)",
            },
          }}
        />
      </WeatherAppProvider>
    </QueryClientProvider>
  );
}

export default App;
