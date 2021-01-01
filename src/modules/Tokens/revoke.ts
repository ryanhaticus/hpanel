// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Tokens%3A%3Arevoke
export interface revokeParameters {
  name: string;
}

import { execute } from './index';

export default (param: revokeParameters) => {
  return execute({
    function: 'revoke',
    parameters: param,
  });
};
