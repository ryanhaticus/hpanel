// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_filters_backups
export interface ListFiltersBackupsParameters {}

import { execute } from './index';

export default (param: ListFiltersBackupsParameters) => {
  return execute({
    function: 'list_filters_backups',
    parameters: param
  });
};
