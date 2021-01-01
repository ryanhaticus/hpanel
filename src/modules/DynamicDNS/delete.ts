// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DynamicDNS%3A%3Adelete
export interface DDNSdeleteParameters {
  id: string;
}

import { execute } from './index';

export default (param: DDNSdeleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param,
  });
};
