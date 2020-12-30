// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aset_forwarders
export interface SetForwardersParameters {
  email: string;
  forwarder: string;
}

import { execute } from './index';

export default (param: SetForwardersParameters) => {
  return execute({
    function: 'set_forwarders',
    parameters: param
  });
};
