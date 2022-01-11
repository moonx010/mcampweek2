import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUser = async (user) => {

  try {
      console.log(JSON.stringify(user))
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    // saving error
    console.log('setUser error')
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    console.log("jsonValue: " + jsonValue)
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('etUser error')
    // error reading value
  }
};