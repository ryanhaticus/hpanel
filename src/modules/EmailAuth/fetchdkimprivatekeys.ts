// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Afetch_dkim_private_keys
export interface fetchDkimPrivateKeysParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: fetchDkimPrivateKeysParameters) => {
  return execute({
    function: 'fetch_dkim_private_keys',
    parameters: param
  });
};
