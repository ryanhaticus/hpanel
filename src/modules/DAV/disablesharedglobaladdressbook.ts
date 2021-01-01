// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Adisable_shared_global_addressbook
export interface disableSharedGlobalAddressbookParameters {
  name?: string;
}

import { execute } from './index';

export default (param?: disableSharedGlobalAddressbookParameters) => {
  return execute({
    function: 'disable_shared_global_addressbook',
    parameters: param,
  });
};
