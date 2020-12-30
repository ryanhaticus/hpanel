// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aaccount_name
export interface AccountNameParameters {
  account?: string;
  display?: string;
}

import { execute } from './index';

export default (param?: AccountNameParameters) => {
  return execute({
    function: 'account_name',
    parameters: param
  });
};
