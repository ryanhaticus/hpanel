// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_pop
export interface DeletePopParameters {
  email: string;
  flags?: string;
  domain?: string;
  skip_quota?: boolean;
}

import { execute } from './index';

export default (param: DeletePopParameters) => {
  return execute({
    function: 'delete_pop',
    parameters: param
  });
};
