import { API_URL } from '../config/constants';

class Api {
  constructor() {
    this.url = `${API_URL}/`;
  }

  _fetch(path, queryParams = {}) {
    const config = {};
    config.headers = { 'Accept': 'application/json' };
    if (queryParams.method) {
      config.method = queryParams.method;
    }
    if (queryParams.headers) {
      config.headers = {...config.headers, ...queryParams.headers};
    }
    if (queryParams.body) {
      config.body = JSON.stringify(queryParams.body);
    }

    return fetch(`${this.url}${path}`, config)
      .then(res => {
        if (res.ok) return res.json();

        return res.json().then(res => Promise.reject(res.message));
      });
  }

  getResults() {
    return this._fetch('results');
  }

  saveResult(result) {
    return this._fetch('results',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: result
      }
    );
  }
}

const api = new Api();

export default api;
