// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_email_forwarders
export interface RestoreEmailForwardersParameters {
  backup: string;
  verbose?: boolean;
  timeout?: number;
}

import { execute } from './index';

export default (param: RestoreEmailForwardersParameters) => {
  return execute({
    function: 'restore_email_forwarders',
    parameters: param
  });
};
