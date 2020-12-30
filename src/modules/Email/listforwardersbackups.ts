// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_forwarders_backups
export interface ListForwardersBackupsParameters {}

import { execute } from './index';

export default (param: ListForwardersBackupsParameters) => {
  return execute({
    function: 'list_forwarders_backups',
    parameters: param
  });
};
