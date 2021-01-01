// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_log
export interface getLogParameters {
  email: string;
  date?: string;
}

import { execute } from './index';

export default (param: getLogParameters) => {
  return execute({
    function: 'get_log',
    parameters: param,
  });
};
