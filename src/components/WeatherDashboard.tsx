import { Card, Container } from "react-bootstrap";
import { WiDayCloudyGusts } from "react-icons/wi";
import WeatherChart from "./WeatherChart";
import WeatherInfo from "./WeatherInfo";
import "./WeatherDashboard.css";

export default function WeatherDashboard() {
  return (
    <Container className="">
      <div className="mt-5 text-center title">
        Weather in Basel <WiDayCloudyGusts size="2.2em" />
      </div>
      <Card
        style={{
          borderRadius: 10,
        }}
        className="m-4 p-2   
        "
      >
        <Card.Body>
          <WeatherChart />
        </Card.Body>
      </Card>
      <Card
        style={{
          borderRadius: 10,
        }}
        className="m-4 p-2"
      >
        <Card.Body>
          <WeatherInfo />
        </Card.Body>
      </Card>
    </Container>
  );
}
