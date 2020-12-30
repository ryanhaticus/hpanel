// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Adelete_messages
export interface DeleteMessagesParameters {
  email: string;
  queuefile: string;
  all_like?: boolean;
}

import { execute } from './index';

export default (param: DeleteMessagesParameters) => {
  return execute({
    function: 'delete_messages',
    parameters: param
  });
};
