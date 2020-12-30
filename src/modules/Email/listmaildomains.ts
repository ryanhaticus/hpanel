// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_mail_domains
export interface ListMailDomainsParameters {
  select?: string;
  add_www?: boolean;
  include_wildcard?: boolean;
}

import { execute } from './index';

export default (param: ListMailDomainsParameters) => {
  return execute({
    function: 'list_mail_domains',
    parameters: param
  });
};
