// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_mailbox_autocreate
export interface enableMailboxAutocreateParameters {
  email: string;
}

import { execute } from './index';

export default (param: enableMailboxAutocreateParameters) => {
  return execute({
    function: 'enable_mailbox_autocreate',
    parameters: param,
  });
};
