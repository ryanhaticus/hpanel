// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adelete_key
export interface deleteKeyParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: deleteKeyParameters) => {
  return execute({
    function: 'delete_key',
    parameters: param,
  });
};
