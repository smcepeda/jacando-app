import { useEffect, useState } from "react";

const APIKEY = "1720d388042d7ca921450ed9002384d1";

interface Props {
  apiKey: string;
}

export default function useOpenWeather({ apiKey }: Props) {

    
  const [apiData, setApiData] = useState(null);
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=47.559&lon=7.588&exclude=minutely,alerts,hourly&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  }, [apiURL]);

  return apiData;
}
