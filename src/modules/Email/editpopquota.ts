// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aedit_pop_quota
export interface editPopQuotaParameters {
  email?: number;
  domain?: number;
  quota: number;
}

import { execute } from './index';

export default (param: editPopQuotaParameters) => {
  return execute({
    function: 'edit_pop_quota',
    parameters: param
  });
};
