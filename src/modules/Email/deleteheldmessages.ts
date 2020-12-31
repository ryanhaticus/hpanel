// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_held_messages
export interface deleteHeldMessagesParameters {
  email?: number;
}

import { execute } from './index';

export default (param?: deleteHeldMessagesParameters) => {
  return execute({
    function: 'delete_held_messages',
    parameters: param
  });
};
