import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Text} from "react-native";
import { useDispatch } from 'react-redux';
import {GET_WEATHER} from "../actions/actions";
import styled from "styled-components/native";

const CitySearch = () => {
  const dispatch = useDispatch();
  const cityName = useRef("");
  const handleSubmit = (searchName) => {
    dispatch(GET_WEATHER(searchName.value));
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
          <Weather>
            Weather
          </Weather>
        </View>
        <View style={styles.fixToText}>
          <TextInput
              style={styles.input}
              placeholder="Search By City Name"
              autoFocus={true}
              onSubmitEditing={(e) => handleSubmit(e.target)}
              ref={cityName}
          />
          <TouchableOpacity style={styles.holder}>
            <Text style={styles.button} onPress={() => handleSubmit(cityName.current)}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const Weather = styled.Text`
  text-align: center;
  font-size: 4em;
  margin-top: .5em;
  color: white;
`;
const styles = StyleSheet.create({
  Weather: {
  textAlign: "center",
  fontSize: 4,
  marginTop: .5,
  color: "white"
  },
  holder: {
    padding: 10
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: "#aecc66",
    padding: 18,
    borderRadius: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    height: 50,
    margin: 12,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    maxWidth: 1500,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default CitySearch;
