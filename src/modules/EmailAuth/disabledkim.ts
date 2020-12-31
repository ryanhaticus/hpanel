// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Adisable_dkim
export interface disableDkimParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: disableDkimParameters) => {
  return execute({
    function: 'disable_dkim',
    parameters: param
  });
};
