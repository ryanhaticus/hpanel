// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_configuration
export interface GetConfigurationParameters {
  email: string;
}

import { execute } from './index';

export default (param: GetConfigurationParameters) => {
  return execute({
    function: 'get_configurations',
    parameters: param
  });
};
