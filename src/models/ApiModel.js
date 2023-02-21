import config from './Config';

class ApiModel {
  constructor(instanceName) {
    this.apiBaseUrl = config.getApiUrl();
    this.apiUrl = `${this.apiBaseUrl}${instanceName}s/`;
  }

  async sendRequest(method, data = null) {
    try {
      const params = data || '';
      switch (method) {
        case 'GET':
        case 'DELETE':
          return await fetch(`${this.apiUrl}${params}`, {
            method,
          });
        case 'POST':
        case 'PUT':
          return await fetch(`${this.apiUrl}`, {
            method,
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        default: return undefined;
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default ApiModel;
