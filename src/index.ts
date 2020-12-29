// Import Axios for REST Requests
import axios, { AxiosInstance } from 'axios';

// Required credentials for CPanel API authorization.
interface Authorization {
  username: string;
  token: string;
  cpanelUri: string;
}

// Axios instance decleration.
export let instance: {
  axios: AxiosInstance;
};

// Authenticate the user via. a default function ran from importing the module.
export default (authorization: Authorization) => {
  instance.axios = axios.create({
    baseURL: authorization.cpanelUri.endsWith('/')
      ? `${authorization.cpanelUri}execute/`
      : `${authorization.cpanelUri}/execute/`,
    headers: {
      Authorization: `${authorization.username}:${authorization.token}`
    }
  });
};

// Export modules.
export * as Email from './modules/Email';
