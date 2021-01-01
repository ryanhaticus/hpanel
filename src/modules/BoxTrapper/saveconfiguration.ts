// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Asave_configuration
export interface saveConfigurationParameters {
  email: string;
  from_addresses: string;
  spam_score?: number;
  queue_days: number;
  enable_auto_whitelist: boolean;
  whitelist_by_association: boolean;
  from_name?: string;
}

import { execute } from './index';

export default (param: saveConfigurationParameters) => {
  return execute({
    function: 'save_configuration',
    parameters: param,
  });
};
