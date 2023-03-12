import React, { useState } from "react";
import styled from "styled-components/native";
import CitySearch from "./CitySearch";
import CityWeather from "./CityWeather";
import {useSelector} from "react-redux";
import backgroundImg from "../../assets/backgroundImg.png";
import {ImageBackground, ScrollView} from "react-native";

const MainWeather = () => {
    const [city, setCity] = useState("");
    const weathers = useSelector(state => state.weather);

    return (
        <Container>
            <ImageBackground source={backgroundImg} style={{width: "100%", height: "100%"}}>
                <CitySearch
                    city={city}
                    setCity={setCity}
                />
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
                    <FutureForecastContainer>
                        {weathers.map((city, index) => {
                            return <CityWeather key={index} city={city}/>;
                        })
                        }
                    </FutureForecastContainer>
                </ScrollView>
            </ImageBackground>
        </Container>
    );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainWeather;
