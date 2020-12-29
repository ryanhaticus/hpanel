// Import Axios for REST Requests
import axios, { AxiosInstance } from 'axios';

// Required credentials for CPanel API authorization.
interface Authorization {
  username: string;
  token: string;
  cpanelUri: string;
}

interface Instance {
  axios: AxiosInstance;
}

// Axios instance decleration.
export let instance: Instance = {
  axios
};

// Authenticate the user via. a default function ran from importing the module.
export default (authorization: Authorization) => {
  instance.axios = axios.create({
    baseURL: authorization.cpanelUri.endsWith('/')
      ? `${authorization.cpanelUri}execute/`
      : `${authorization.cpanelUri}/execute/`,
    headers: {
      Authorization: `cpanel ${authorization.username}:${authorization.token}`
    }
  });
};

// Export modules.
export * as Email from './modules/Email';
