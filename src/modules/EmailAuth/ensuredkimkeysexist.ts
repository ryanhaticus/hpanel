// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Aensure_dkim_keys_exist
export interface ensureDkimKeysExistParameters {
  domain: string;
}

import { execute } from './index';

export default (param: ensureDkimKeysExistParameters) => {
  return execute({
    function: 'ensure_dkim_keys_exist',
    parameters: param,
  });
};
