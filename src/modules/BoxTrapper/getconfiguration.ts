// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_configuration
export interface getConfigurationParameters {
  email?: number;
}

import { execute } from './index';

export default (param?: getConfigurationParameters) => {
  return execute({
    function: 'get_configuration',
    parameters: param
  });
};
