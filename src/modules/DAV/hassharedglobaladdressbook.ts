// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Ahas_shared_global_addressbook
export interface hasSharedGlobalAddressbookParameters {
  name: number;
}

import { execute } from './index';

export default (param: hasSharedGlobalAddressbookParameters) => {
  return execute({
    function: 'has_shared_global_addressbook',
    parameters: param
  });
};
