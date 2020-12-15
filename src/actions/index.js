import restCountries from "../apis/restCountries";

export const selectRegion = (region) => {
  return {
    type: "REGION_SELECTED",
    payload: region,
  };
};

export const fetchCountries = (region) => async (dispatch) => {
  const response = await restCountries.get(`${region.name}`);
  dispatch({ type: "FETCH_COUNTRIES", payload: response });
};
