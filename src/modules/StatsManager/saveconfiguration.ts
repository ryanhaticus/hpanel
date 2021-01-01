// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+StatsManager%3A%3Asave_configuration
export interface saveConfigurationParameters {
  changes: number;
  domain: string;
  analyzers: number;
  enabled: boolean;
  name: string;
}

import { execute } from './index';

export default (param: saveConfigurationParameters) => {
  return execute({
    function: 'save_configuration',
    parameters: param,
  });
};
