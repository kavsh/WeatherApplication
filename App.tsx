import React from "react";
import {store} from "./store/store";
import {Provider} from "react-redux";
import MainWeather from "./src/components/MainWeather";

const App = () => {

  return (
      <Provider store={store}>
        <MainWeather />
      </Provider>
  );
};

export default App;
