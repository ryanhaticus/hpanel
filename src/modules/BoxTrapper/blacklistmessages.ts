// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Ablacklist_messages
export interface BlacklistMessagesParameters {
  email: string;
  queuefile: string;
}

import { execute } from './index';

export default (param: BlacklistMessagesParameters) => {
  return execute({
    function: 'blacklist_messages',
    parameters: param
  });
};
