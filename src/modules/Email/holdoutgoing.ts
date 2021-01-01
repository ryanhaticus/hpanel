// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahold_outgoing
export interface holdOutgoingParameters {
  email: string;
}

import { execute } from './index';

export default (param: holdOutgoingParameters) => {
  return execute({
    function: 'hold_outgoing',
    parameters: param,
  });
};
