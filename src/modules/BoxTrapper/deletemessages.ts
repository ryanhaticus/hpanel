// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Adelete_messages
export interface deleteMessagesParameters {
  email?: number;
  queuefile?: number;
  all_like: boolean;
}

import { execute } from './index';

export default (param: deleteMessagesParameters) => {
  return execute({
    function: 'delete_messages',
    parameters: param
  });
};
