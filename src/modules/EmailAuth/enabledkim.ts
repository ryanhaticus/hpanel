// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Aenable_dkim
export interface enableDkimParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: enableDkimParameters) => {
  return execute({
    function: 'enable_dkim',
    parameters: param
  });
};
