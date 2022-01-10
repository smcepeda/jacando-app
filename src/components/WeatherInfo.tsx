import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Collapse, ListGroup, Row } from "react-bootstrap";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

export default function WeatherInfo() {
  const [open, setOpen] = useState(false);

  const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
    variables: {
      name: "Basel",
    },
  });
  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error found</h1>;

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <Row>
        <Col style={{ fontWeight: "bold" }} className="align-item-center">
          Statistics{" "}
        </Col>
        <Col className="d-flex justify-content-end align-items-end">
          <Button
            className="mb-2"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            More information
          </Button>
        </Col>
      </Row>
      <ListGroup as="ol">
        <ListGroup.Item as="li">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Current Weather</div>

            {data.getCityByName.weather.summary.description
              .charAt(0)
              .toUpperCase() +
              data.getCityByName.weather.summary.description.slice(1)}
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Today's high temperature:</div>

            {data.getCityByName.weather.temperature.max}
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="  rounded-0">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Today's low temperature :</div>

            {data.getCityByName.weather.temperature.min}
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Collapse in={open}>
        <div>
          <ListGroup.Item as="li">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Wind Speed</div>
              {data.getCityByName.weather.wind.speed}{" "}
            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Humidity:</div>
              {data.getCityByName.weather.clouds.humidity}
            </div>
          </ListGroup.Item>
        </div>
      </Collapse>{" "}
    </div>
  );
}
