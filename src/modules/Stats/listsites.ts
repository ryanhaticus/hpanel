// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Stats%3A%3Alist_sites
export interface listSitesParameters {
  engine?: number;
  traffic: number;
}

import { execute } from './index';

export default (param: listSitesParameters) => {
  return execute({
    function: 'list_sites',
    parameters: param
  });
};
