// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_forwarder
export interface DeleteForwarderParameters {
  address: string;
  forwarder: string;
}

import { execute } from './index';

export default (param: DeleteForwarderParameters) => {
  return execute({
    function: 'delete_forwarder',
    parameters: param
  });
};
