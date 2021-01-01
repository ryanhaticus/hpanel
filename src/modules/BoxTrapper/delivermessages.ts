// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Adeliver_messages
export interface deliverMessagesParameters {
  email: string;
  queuefile: string;
  all_like?: boolean;
}

import { execute } from './index';

export default (param: deliverMessagesParameters) => {
  return execute({
    function: 'deliver_messages',
    parameters: param,
  });
};
