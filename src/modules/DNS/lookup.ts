// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNS%3A%3Alookup
export interface lookupParameters {
  domain: string;
}

import { execute } from './index';

export default (param: lookupParameters) => {
  return execute({
    function: 'lookup',
    parameters: param,
  });
};
