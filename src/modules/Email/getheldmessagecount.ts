// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_held_message_count
export interface getHeldMessageCountParameters {
  email?: string;
}

import { execute } from './index';

export default (param?: getHeldMessageCountParameters) => {
  return execute({
    function: 'get_held_message_count',
    parameters: param,
  });
};
