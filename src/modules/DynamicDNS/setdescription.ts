// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DynamicDNS%3A%3Aset_description
export interface setDescriptionParameters {
  description?: number;
  id?: number;
}

import { execute } from './index';

export default (param?: setDescriptionParameters) => {
  return execute({
    function: 'set_description',
    parameters: param
  });
};
