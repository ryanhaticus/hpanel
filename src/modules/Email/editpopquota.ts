// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aedit_pop_quota
export interface editPopQuotaParameters {
  email: string;
  domain: string;
  quota?: string;
}

import { execute } from './index';

export default (param: editPopQuotaParameters) => {
  return execute({
    function: 'edit_pop_quota',
    parameters: param,
  });
};
