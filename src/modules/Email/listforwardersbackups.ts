// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_forwarders_backups
export interface listForwardersBackupsParameters {
  domain?: string;
}

import { execute } from './index';

export default (param?: listForwardersBackupsParameters) => {
  return execute({
    function: 'list_forwarders_backups',
    parameters: param,
  });
};
