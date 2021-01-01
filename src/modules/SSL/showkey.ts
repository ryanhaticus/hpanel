// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ashow_key
export interface showKeyParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: showKeyParameters) => {
  return execute({
    function: 'show_key',
    parameters: param,
  });
};
