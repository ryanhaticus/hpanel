// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Asave_configuration
export interface saveConfigurationParameters {
  email?: number;
  from_addresses?: number;
  spam_score: number;
  queue_days?: number;
  enable_auto_whitelist?: boolean;
  whitelist_by_association?: boolean;
  from_name: number;
}

import { execute } from './index';

export default (param: saveConfigurationParameters) => {
  return execute({
    function: 'save_configuration',
    parameters: param
  });
};
