import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:auth`
    )

    return accessToken ? JSON.parse(accessToken) : null
  }

  async setAccessToken(accessToken) {
    const newAccessToken = accessToken

    await AsyncStorage.setItem(
        `${this.namespace}:auth`,
        JSON.stringify(newAccessToken)
    )
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:auth`)
  }
}

export default AuthStorage;