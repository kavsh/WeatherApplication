import React from 'react';
import expect from "expect";
import * as Redux from "react-redux";
import {Provider} from "react-redux";
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
import rootReducer from "../reducers";
import {SafeAreaView} from "react-native";
import CitySearch from "../components/CitySearch";

let storeMock;
configure({adapter: new Adapter()});

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

describe('Testing MainWeather', () => {
    beforeAll(() => {
        Redux.useSelector.mockImplementation((callback) => {
            return callback({weather:[]});
        });
        storeMock = storeFactory({});
    });

    it('renders ImageBackground with empty state', () => {
        const weather = mount(<Provider store={storeMock}><CitySearch /></Provider>);
        expect(weather.find(SafeAreaView).length).toEqual(1);
    });
});

