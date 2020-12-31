// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNS%3A%3Ahas_local_authority
export interface hasLocalAuthorityParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: hasLocalAuthorityParameters) => {
  return execute({
    function: 'has_local_authority',
    parameters: param
  });
};
