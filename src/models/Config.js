const API_BASE_URL_KEY = 'VUE_APP_API_BASE_URL';
const BASE_URL_KEY = 'VUE_APP_BASE_URL';

class Config {
  static settings = process.env;

  static getApiUrl() {
    return this.settings[API_BASE_URL_KEY];
  }

  static getBaseUrl() {
    return this.settings[BASE_URL_KEY];
  }
}

export default Config;
