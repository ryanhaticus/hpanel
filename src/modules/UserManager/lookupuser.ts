// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Alookup_user
export interface lookupUserParameters {
  guid: string;
}

import { execute } from './index';

export default (param: lookupUserParameters) => {
  return execute({
    function: 'lookup_user',
    parameters: param,
  });
};
