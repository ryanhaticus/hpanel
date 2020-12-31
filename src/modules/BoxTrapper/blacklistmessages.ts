// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Ablacklist_messages
export interface blacklistMessagesParameters {
  email?: number;
  queuefile?: number;
}

import { execute } from './index';

export default (param?: blacklistMessagesParameters) => {
  return execute({
    function: 'blacklist_messages',
    parameters: param
  });
};
