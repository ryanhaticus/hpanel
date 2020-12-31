// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+StatsManager%3A%3Asave_configuration
export interface saveConfigurationParameters {
  changes?: number;
  domain?: number;
  analyzers?: number;
  enabled?: boolean;
  name?: number;
}

import { execute } from './index';

export default (param?: saveConfigurationParameters) => {
  return execute({
    function: 'save_configuration',
    parameters: param
  });
};
