// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_pop
export interface deletePopParameters {
  email?: number;
  flags: number;
  domain: number;
  skip_quota: boolean;
}

import { execute } from './index';

export default (param: deletePopParameters) => {
  return execute({
    function: 'delete_pop',
    parameters: param
  });
};
