// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Afts_rescan_mailbox
export interface ftsRescanMailboxParameters {
  account?: number;
}

import { execute } from './index';

export default (param?: ftsRescanMailboxParameters) => {
  return execute({
    function: 'fts_rescan_mailbox',
    parameters: param
  });
};
