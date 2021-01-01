// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DCV%3A%3Acheck_domains_via_http
export interface checkDomainsViaHttpParameters {
  domain: string;
  dcv_file_allowed_characters?: number;
  dcv_file_random_character_count?: number;
  dcv_file_extension?: string;
  dcv_file_relative_path?: string;
  dcv_user_agent_string?: string;
  dcv_max_redirects?: number;
}

import { execute } from './index';

export default (param: checkDomainsViaHttpParameters) => {
  return execute({
    function: 'check_domains_via_http',
    parameters: param,
  });
};
