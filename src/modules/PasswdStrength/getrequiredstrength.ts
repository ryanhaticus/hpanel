// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PasswdStrength%3A%3Aget_required_strength
export interface getRequiredStrengthParameters {
  app?: number;
}

import { execute } from './index';

export default (param?: getRequiredStrengthParameters) => {
  return execute({
    function: 'get_required_strength',
    parameters: param
  });
};
