// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_pop
export interface AddPopParameters {
  domain: string;
  email: string;
  password: string;
  quota?: number;
  send_welcome_email?: boolean;
}

import { execute } from './index';

export default (param: AddPopParameters) => {
  return execute({
    function: 'add_pop',
    parameters: param
  });
};
