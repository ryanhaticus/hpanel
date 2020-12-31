// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_auto_responder
export interface deleteAutoResponderParameters {
  email?: number;
}

import { execute } from './index';

export default (param?: deleteAutoResponderParameters) => {
  return execute({
    function: 'delete_auto_responder',
    parameters: param
  });
};
