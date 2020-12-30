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
export * as Backup from './modules/Backup';
export * as Bandwidth from './modules/Bandwith';
export * as Batch from './modules/Batch';
export * as BlockIP from './modules/BlockIP';
export * as BoxTrapper from './modules/BoxTrapper';
export * as Brand from './modules/Brand';
export * as Branding from './modules/Branding';
export * as CacheBuster from './modules/CacheBuster';
