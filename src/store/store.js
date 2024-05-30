import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
//import { AsyncStorage } from "react-native";
/*
/**
 * Saves data to local storage.
 * @param {string} key - The key under which to store the data.
 * @param {any} value - The value to store. Can be any data type.
 * @returns {Promise<void>} A Promise that resolves when the data is saved successfully.
 * @throws {Error} If an error occurs while saving the data.
 
export const setDataToLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data saved successfully");
  } catch (error) {
    try {
      localStorage.setItem(key, value);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }
};
/**
 * Retrieves the value for the given key from local storage.
 * @param {string} key - The key for which to retrieve the value.
 * @returns {Promise<string | null>} A Promise that resolves with the value associated with the key, or null if the key does not exist.
 
export function getDataToLocalStorage(key) {
  let valueLocalStorage = null;
  try {
    AsyncStorage.getItem(key)
      .then((value) => {
        console.log("Value retrieved successfully:", value);
        valueLocalStorage = JSON.parse(value);
      })
      .catch((error) => {
        const value = localStorage.getItem(key);
        if (value && JSON.parse(value)) valueLocalStorage = JSON.parse(value);
        console.error("Error retrieving value:", error);
        valueLocalStorage = null;
      });
  } catch (error) {
    const value = localStorage.getItem(key);
    if (value && JSON.parse(value)) valueLocalStorage = JSON.parse(value);

    console.error("Error saving data:", error);
  }

  return valueLocalStorage;
}
*/
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
