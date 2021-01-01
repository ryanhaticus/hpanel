// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Awhitelist_messages
export interface whitelistMessagesParameters {
  email: string;
  queuefile: string;
}

import { execute } from './index';

export default (param: whitelistMessagesParameters) => {
  return execute({
    function: 'whitelist_messages',
    parameters: param,
  });
};
