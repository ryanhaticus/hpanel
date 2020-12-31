// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Stats%3A%3Alist_stats_by_domain
export interface listStatsByDomainParameters {
  engine?: number;
  domain?: number;
  ssl: boolean;
}

import { execute } from './index';

export default (param: listStatsByDomainParameters) => {
  return execute({
    function: 'list_stats_by_domain',
    parameters: param
  });
};
