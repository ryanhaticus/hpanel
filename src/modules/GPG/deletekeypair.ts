// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Adelete_keypair
export interface deleteKeypairParameters {
  key_id: string;
}

import { execute } from './index';

export default (param: deleteKeypairParameters) => {
  return execute({
    function: 'delete_keypair',
    parameters: param,
  });
};
