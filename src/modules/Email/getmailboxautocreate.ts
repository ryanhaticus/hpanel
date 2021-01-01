// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_mailbox_autocreate
export interface getMailboxAutocreateParameters {
  email: string;
}

import { execute } from './index';

export default (param: getMailboxAutocreateParameters) => {
  return execute({
    function: 'get_mailbox_autocreate',
    parameters: param,
  });
};
