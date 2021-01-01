// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DynamicDNS%3A%3Arecreate
export interface recreateParameters {
  id: string;
}

import { execute } from './index';

export default (param: recreateParameters) => {
  return execute({
    function: 'recreate',
    parameters: param,
  });
};
