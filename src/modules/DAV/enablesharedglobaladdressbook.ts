// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Aenable_shared_global_addressbook
export interface enableSharedGlobalAddressbookParameters {
  name?: string;
}

import { execute } from './index';

export default (param?: enableSharedGlobalAddressbookParameters) => {
  return execute({
    function: 'enable_shared_global_addressbook',
    parameters: param,
  });
};
