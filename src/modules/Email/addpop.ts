// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_pop
export interface addPopParameters {
  email: string;
  password: string;
  domain?: string;
  quota?: number;
  skip_update_db?: boolean;
  password_hash?: string;
  send_welcome_email?: boolean;
}

import { execute } from './index';

export default (param: addPopParameters) => {
  return execute({
    function: 'add_pop',
    parameters: param,
  });
};
