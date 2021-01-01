// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Adelete_handler
export interface deleteHandlerParameters {
  extension: string;
}

import { execute } from './index';

export default (param: deleteHandlerParameters) => {
  return execute({
    function: 'delete_handler',
    parameters: param,
  });
};
