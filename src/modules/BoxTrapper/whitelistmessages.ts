// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Awhitelist_messages
export interface WhitelistMessagesParameters {
  email: string;
  queuefile: string;
}

import { execute } from './index';

export default (param: WhitelistMessagesParameters) => {
  return execute({
    function: 'whitelist_messages',
    parameters: param
  });
};
