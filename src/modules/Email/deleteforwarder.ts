// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_forwarder
export interface deleteForwarderParameters {
  address?: number;
  forwarder?: number;
}

import { execute } from './index';

export default (param?: deleteForwarderParameters) => {
  return execute({
    function: 'delete_forwarder',
    parameters: param
  });
};
