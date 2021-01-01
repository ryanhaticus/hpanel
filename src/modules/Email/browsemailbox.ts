// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Abrowse_mailbox
export interface browseMailboxParameters {
  account?: string;
  dir?: string;
  showdotfiles?: boolean;
}

import { execute } from './index';

export default (param?: browseMailboxParameters) => {
  return execute({
    function: 'browse_mailbox',
    parameters: param,
  });
};
