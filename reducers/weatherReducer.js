
const weatherReducer = (state = [], action) => {
    switch (action?.type) {
        case 'UPDATE_WEATHER_LIST': {
            const hasAlreadyTheCity = state.find(city => city.name.toLowerCase() === action.payload.name.toLowerCase());
            return !hasAlreadyTheCity ? [...state, {...action.payload}] : state;
        }
        default: {
            return state;
        }
    }
};
export default weatherReducer;
