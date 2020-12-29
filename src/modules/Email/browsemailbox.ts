// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Abrowse_mailbox
export interface BrowseMailboxParameters {
  account?: string;
  dir?: string;
  showdotfiles?: boolean;
}

import { execute } from './index';

export default (param: BrowseMailboxParameters) => {
  return execute({
    function: 'browse_mailbox',
    parameters: param
  });
};
