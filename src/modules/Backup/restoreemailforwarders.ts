// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_email_forwarders
export interface restoreEmailForwardersParameters {
  backup: string;
  verbose?: boolean;
  timeout?: number;
}

import { execute } from './index';

export default (param: restoreEmailForwardersParameters) => {
  return execute({
    function: 'restore_email_forwarders',
    parameters: param,
  });
};
