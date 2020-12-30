// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_email_filters
export interface RestoreEmailFiltersParameters {
  backup: string;
  verbose?: boolean;
  timeout?: number;
}

import { execute } from './index';

export default (param: RestoreEmailFiltersParameters) => {
  return execute({
    function: 'restore_email_filters',
    parameters: param
  });
};
