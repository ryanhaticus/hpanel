// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Afts_rescan_mailbox
export interface FtsRescanMailboxParameters {
  account: string;
}

import { execute } from './index';

export default (param: FtsRescanMailboxParameters) => {
  return execute({
    function: 'fts_rescan_mailbox',
    parameters: param
  });
};
