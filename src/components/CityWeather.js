import React from "react";
import {Text} from "react-native";
import styled from "styled-components/native";
import moment from "moment";

const CityWeather = ({ city }) => {
    let timezone = 3600;
    const sunrise = moment.utc(city.sys.sunrise, 'X').add(timezone, 'seconds').format('HH:mm a');
    const sunset = moment.utc(city.sys.sunset, 'X').add(timezone, 'seconds').format('HH:mm a');

    return (
        <>
        <DayContainer>
            <Title>
                <Title>
                    {city.name}
                </Title>
            </Title>
            <DateContainer>
                <WeekDay>{moment(city.dt * 1000).format("ddd")}</WeekDay>
            </DateContainer>
            <DegreeView>
                <Degree>{Math.round(city.main.temp)}°C</Degree>
                <FeelsLike>Feels {Math.round(city.main.feels_like)}°C</FeelsLike>
            </DegreeView>
            <IconTempView>
                <WeatherIcon
                    source={{
                        uri: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
                    }}
                    resizeMode={"contain"}
                />

                <Text>Sunrise: {sunrise} {'\n'}</Text>
                <Text>sunset: {sunset} {'\n'}</Text>
            </IconTempView>
        </DayContainer>
            </>
    );
};

const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 478px;
`;

const DateContainer = styled.View`
  text-align: right;
  flex: 1;
`;

const WeekDay = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const IconTempView = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  flex: 2;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const DegreeView = styled.View`
  text-align: center;
  flex: 1;
`;

const Degree = styled.Text`
  font-size: 24px;
`;

const FeelsLike = styled.Text`
  font-size: 14px;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export default CityWeather;
