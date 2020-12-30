// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aedit_pop_quota
export interface EditPopQuotaParameters {
  email: string;
  domain: string;
  quota?: string;
}

import { execute } from './index';

export default (param: EditPopQuotaParameters) => {
  return execute({
    function: 'edit_pop_quota',
    parameters: param
  });
};
