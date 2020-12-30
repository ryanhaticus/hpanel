// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_mailbox_autocreate
export interface EnableMailboxAutocreateParameters {
  email: string;
}

import { execute } from './index';

export default (param: EnableMailboxAutocreateParameters) => {
  return execute({
    function: 'enable_mailbox_autocreate',
    parameters: param
  });
};
