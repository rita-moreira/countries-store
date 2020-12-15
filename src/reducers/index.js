import { combineReducers } from "redux";

const regionsReducer = () => {
  return [
    { name: "Africa", img: "./images/africa.png" },
    { name: "Americas", img: "./images/america.png" },
    { name: "Asia", img: "./images/asia.png" },
    { name: "Europe", img: "./images/europa.png" },
    { name: "Oceania", img: "./images/australia.png" },
  ];
};

const selectedRegionReducer = (selectedRegion = null, action) => {
  if (action.type === "REGION_SELECTED") {
    return action.payload;
  }

  return selectedRegion;
};

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  regions: regionsReducer,
  selectRegion: selectedRegionReducer,
  countries: countriesReducer,
});
