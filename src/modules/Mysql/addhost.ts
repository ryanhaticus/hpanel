// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aadd_host
export interface addHostParameters {
  host: string;
}

import { execute } from './index';

export default (param: addHostParameters) => {
  return execute({
    function: 'add_host',
    parameters: param,
  });
};
