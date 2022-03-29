import { ActionType } from "./../contents/actionType";

export const setCurrentWeather = (data) => {
  return {
    type: ActionType.setCurrentWeather,
    payload: data,
  };
};

export const setDailyWeather = (data) => {
  return {
    type: ActionType.setDailyWeather,
    payload: { data },
  };
};

export const setHourlyWeather = (data) => {
  return {
    type: ActionType.setHourlyWeather,
    payload: { data },
  };
};
