import React from "react";
import {Text} from "react-native";
import styled from "styled-components/native";
import moment from "moment";

const CityWeather = ({ city }) => {
    let timezone = 3600;
    const sunrise = moment.utc(city.sys.sunrise, 'X').add(timezone, 'seconds').format('HH:mm a');
    const sunset = moment.utc(city.sys.sunset, 'X').add(timezone, 'seconds').format('HH:mm a');

    return (
        <DayContainer>
            <DateContainer>
                <Title>
                    {city.name}
                </Title>
                <WeekDay>{moment(city.dt * 1000).format("ddd")}</WeekDay>
            </DateContainer>
            <DegreeView>
                <Degree>{Math.round(city.main.temp)}°C</Degree>
                <WeatherIcon style={{display: 'inline-block', width: '50%', marginLeft: '20px'}}
                             source={{
                                 uri: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
                             }}
                             resizeMode={"contain"}
                />
                <FeelsLike>Feels {Math.round(city.main.feels_like)}°C</FeelsLike>
            </DegreeView>
            <IconTempView>
                <Text style={{float: 'left'}}>Sunrise: {sunrise}</Text>
                <Text style={{float: 'right'}}>sunset: {sunset}</Text>
            </IconTempView>
        </DayContainer>

    );
};

const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: inline-block;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
`;

const DateContainer = styled.View`
  width: 100%;
  display: inline-block;
  margin-bottom: 10px;
`;

const WeekDay = styled.Text`
  font-size: 16px;
  float: right;
`;

const IconTempView = styled.View`
  width: 100%;
  display: inline-block;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const DegreeView = styled.View`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
`;

const Degree = styled.Text`
  font-size: 24px;
  float: left;
`;

const FeelsLike = styled.Text`
  font-size: 14px;
  float: right;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export default CityWeather;
