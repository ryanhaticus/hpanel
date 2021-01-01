// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Adelete_host
export interface deleteHostParameters {
  host: string;
}

import { execute } from './index';

export default (param: deleteHostParameters) => {
  return execute({
    function: 'delete_host',
    parameters: param,
  });
};
