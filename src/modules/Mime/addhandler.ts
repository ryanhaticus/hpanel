// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aadd_handler
export interface addHandlerParameters {
  extension: string;
  handler: string;
}

import { execute } from './index';

export default (param: addHandlerParameters) => {
  return execute({
    function: 'add_handler',
    parameters: param,
  });
};
