// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahold_outgoing
export interface HoldOutgoingParameters {
  email: string;
}

import { execute } from './index';

export default (param: HoldOutgoingParameters) => {
  return execute({
    function: 'hold_outgoing',
    parameters: param
  });
};
