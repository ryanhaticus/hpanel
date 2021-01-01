// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Adelete_mime
export interface deleteMimeParameters {
  type: string;
}

import { execute } from './index';

export default (param: deleteMimeParameters) => {
  return execute({
    function: 'delete_mime',
    parameters: param,
  });
};
