import fetch from 'isomorphic-fetch';
import config from '../config';
const BASE = config.apiUrl || 'http://localhost:8102';

export default function apiClient(token) {
  return {
    token: token,
    fetch: function(url, options) {
      if(!options) {
        options = {};
      }
      if(this.token) {
        options.headers = {Authorization: 'Bearer ' + this.token};
      }
      return fetch(BASE + url, options);
    }
  }
}
