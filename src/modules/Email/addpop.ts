// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_pop
export interface addPopParameters {
  email?: number;
  password?: number;
  domain: number;
  quota: number;
  skip_update_db: boolean;
  password_hash: number;
  send_welcome_email: boolean;
}

import { execute } from './index';

export default (param: addPopParameters) => {
  return execute({
    function: 'add_pop',
    parameters: param
  });
};
