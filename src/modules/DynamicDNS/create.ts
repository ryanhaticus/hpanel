// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DynamicDNS%3A%3Acreate
export interface createParameters {
  domain?: number;
  description: number;
}

import { execute } from './index';

export default (param: createParameters) => {
  return execute({
    function: 'create',
    parameters: param
  });
};
