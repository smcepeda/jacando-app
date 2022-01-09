import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ overflowY: "scroll" }}>
        <WeatherDashboard />
      </div>
    </ApolloProvider>
  );
}

export default App;
