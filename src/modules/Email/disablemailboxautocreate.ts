// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_mailbox_autocreate
export interface DisableMailboxAutocreateParameters {
  email: string;
}

import { execute } from './index';

export default (param: DisableMailboxAutocreateParameters) => {
  return execute({
    function: 'disable_mailbox_autocreate',
    parameters: param
  });
};
