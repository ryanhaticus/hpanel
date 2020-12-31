// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_provider_specific_dcv_constraints
export interface getProviderSpecificDcvConstraintsParameters {
  provider?: number;
}

import { execute } from './index';

export default (param?: getProviderSpecificDcvConstraintsParameters) => {
  return execute({
    function: 'get_provider_specific_dcv_constraints',
    parameters: param
  });
};
