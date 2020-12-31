// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebDisk%3A%3Adelete_user
export interface deleteUserParameters {
  user?: number;
  destroy?: boolean;
}

import { execute } from './index';

export default (param?: deleteUserParameters) => {
  return execute({
    function: 'delete_user',
    parameters: param
  });
};
