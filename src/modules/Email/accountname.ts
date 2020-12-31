// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aaccount_name
export interface accountNameParameters {
  account: number;
  display: number;
}

import { execute } from './index';

export default (param: accountNameParameters) => {
  return execute({
    function: 'account_name',
    parameters: param
  });
};
