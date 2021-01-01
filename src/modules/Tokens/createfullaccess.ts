// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Tokens%3A%3Acreate_full_access
export interface createFullAccessParameters {
  name: string;
  expires_at?: number;
}

import { execute } from './index';

export default (param: createFullAccessParameters) => {
  return execute({
    function: 'create_full_access',
    parameters: param,
  });
};
