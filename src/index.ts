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

/*

import api, { Email } from 'hpanel';

// curl -H'Authorization: cpanel username:U7HMR63FHY282DQZ4H5BIH16JLYSO01M' 'https://example.com:2083/execute/Email/addpop?email=newuser&password=12345luggage'


api({
  username: 'username',
  token: 'U7HMR63FHY282DQZ4H5BIH16JLYSO01M',
  cpanelUri: 'https://example.com:2083/'
})

let response = Email.addpop({
  email: 'newuser',
  password: '12345luggage'
});

response...

*/
